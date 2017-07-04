var http = require('http')
var os = require('os')
var exec = require('child_process').exec
var path = require('path')
var connect = require('connect')
var serveStatic = require('serve-static')
var vendor = {
    getIPAddress: function() {
        var ifaces = os.networkInterfaces()
        var ip = ''
        for (var dev in ifaces) {
            ifaces[dev].forEach(function(details) {
                if (ip === '' && details.family === 'IPv4' && !details.internal) {
                    ip = details.address
                    return ''
                }
            })
        }
        return ip || "127.0.0.1"
    },
    openURL: function(url) {
        switch (process.platform) {
            case "darwin":
                exec('open ' + url);
                break;
            case "win32":
                exec('start ' + url);
                break;
            default:
                exec('xdg-open', [url]);
        }
    }
}
var config = {
    publicPath: '',
    homePage: 'index.html',
    port: '8002',
    autoOpenBrowser: false,
}

var app = connect()

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.use(serveStatic(process.cwd(), { 'index': ['index.html'] }))
var server = http.createServer(app)


function start(options) {
    config = Object.assign({}, config, options)
    server.listen(config.port !== 0 ? config.port : 0)
    var defaultUrl = config.publicPath ? config.publicPath + '/' + config.homePage : config.homePage
    server.on('listening', function() {
        var port = server.address().port
        console.log('>>listening at port: ' + port)
        config.autoOpenBrowser && vendor.openURL('http://' + vendor.getIPAddress() + ':' + port + '/' + defaultUrl)
    })
}
start()
module.exports = start