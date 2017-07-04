# Global对象

所有在全局作用域中定义的属性和函数，都是Global 对象的属性。

isNaN()、isFinite()、parseInt()以及parseFloat()，实际上全都是Global对象的方法。

除此之外，Global 对象还包含其他一些方法：

### URI 编码方法

Global 对象的encodeURI()和encodeURIComponent()方法可以对URI进行编码，以便发送给浏览器。

有效的URI 中不能包含某些字符，例如空格。而这两个URI 编码方法就可以对URI 进行编码，它们用特殊的UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。

encodeURI()不会对本身属于URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号。

encodeURIComponent()则会对它发现的任何非标准字符进行编码。

```javascript
var uri = "http://www.wrox.com/illegal value.htm#start";
//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));
```

> 一般来说， 我们使用encodeURIComponent() 方法的时候要比使用encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础URI进行编码。

与encodeURI()和encodeURIComponent()方法对应的两个方法分别是decodeURI()和decodeURIComponent()。

decodeURI()只能对使用encodeURI()替换的字符进行解码。例如，它可将%20 替换成一个空格，但不会对%23 作任何处理。

decodeURIComponent()能够解码使用encodeURIComponent()编码的所有字符。

```javascript
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
alert(decodeURI(uri));
//http://www.wrox.com/illegal value.htm#start
alert(decodeURIComponent(uri));
```

escape()和unescape()只能正确地编码ASCII 字符，已经被废弃！

### eval()方法

eval()方法就像是一个完整的ECMAScript 解析器，它只接受一个参数，即要执行的或JavaScript字符串，然后把执行结果插入到原位置。

```javascript
eval("alert('hi')");
//这行代码的作用等价于下面这行代码：
alert("hi");
```

在eval()中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建。

严格模式下，在外部访问不到eval()中创建的任何变量或函数。

*Global 对象的属性*

特殊的值undefined、NaN 以及Infinity 都是Global 对象的属性。

所有原生引用类型的构造函数，像Object 和Function，也都是Global 对象的属性。

下表列出了Global 对象的所有属性：

| 属 性            | 说 明                |
| -------------- | ------------------ |
| undefined      | 特殊值undefined       |
| NaN            | 特殊值NaN             |
| Infinity       | 特殊值Infinity        |
| Object         | 构造函数Object         |
| Array          | 构造函数Array          |
| Function       | 构造函数Function       |
| Boolean        | 构造函数Boolean        |
| String         | 构造函数String         |
| Number         | 构造函数Number         |
| Date           | 构造函数Date           |
| RegExp         | 构造函数RegExp         |
| Error          | 构造函数Error          |
| EvalError      | 构造函数EvalError      |
| RangeError     | 构造函数RangeError     |
| ReferenceError | 构造函数ReferenceError |
| SyntaxError    | 构造函数SyntaxError    |
| TypeError      | 构造函数TypeError      |
| URIError       | 构造函数URIError       |

ECMAScript 5 明确禁止给undefined、NaN 和Infinity 赋值，这样做即使在非严格模式下也会导致错误。

*window 对象*

ECMAScript 虽然没有指出如何直接访问Global 对象，但Web 浏览器都是将这个全局对象作为window 对象的一部分加以实现的。因此，在全局作用域中声明的所有变量和函数，就都成为了window对象的属性。

```javascript
var color = "red";
function sayColor(){
	alert(window.color);
}
window.sayColor(); //"red"
```

JavaScript中的window 对象除了扮演ECMAScript规定的Global 对象的角色外，还承担了很多别的任务。

另一种取得Global 对象的方法是使用以下代码：

```javascript
var global = function(){
	return this;
}();
```

