# Undefined类型

Undefined 类型只有一个值，即特殊的undefined

在使用var 声明变量但未对其加以初始化时，这个变量的值就是undefined

```javascript
var message;
alert(message == undefined); //true
```

对未初始化的变量执行typeof 操作符会返回undefined 值，而对未声明的变量执行typeof 操作符同样也会返回undefined 值。

```javascript
var message; // 这个变量声明之后默认取得了undefined 值
// 下面这个变量并没有声明
// var age
alert(typeof message); // "undefined"
alert(typeof age); // "undefined"
```

