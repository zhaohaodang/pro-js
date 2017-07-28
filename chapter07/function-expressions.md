# 第7章 函数表达式

函数表达式是JavaScript 中的一个既强大又容易令人困惑的特性。第5 章曾介绍过，定义函数的方式有两种：一种是函数声明，另一种就是函数表达式。函数声明的语法是这样的。

```javascript
function functionName(arg0, arg1, arg2) {
	//函数体
}
```

Firefox、Safari、Chrome和Opera 都给函数定义了一个非标准的name 属性，通过这个属性可以访问到给函数指定的名字。

```javascript
//只在Firefox、Safari、Chrome 和Opera 有效
alert(functionName.name); //"functionName"
```

关于函数声明，它的一个重要特征就是**函数声明提升**（function declaration hoisting），意思是在执行代码之前会先读取函数声明。这就意味着可以把函数声明放在调用它的语句后面。

```javascript
sayHi();
function sayHi(){
	alert("Hi!");
}
```

第二种创建函数的方式是使用函数表达式。函数表达式有几种不同的语法形式。下面是最常见的一种形式。

```javascript
var functionName = function(arg0, arg1, arg2){
	//函数体
};
```

这种情况下创建的函数叫做**匿名函数**（anonymous function），因为function 关键字后面没有标识符。（匿名函数有时候也叫拉姆达函数。）匿名函数的name 属性是空字符串。

理解函数提升的关键，就是理解函数声明与函数表达式之间的区别。例如，执行以下代码的结果可能会让人意想不到。

```javascript
if(condition){
	function sayHi(){
		alert("Hi!");
	}
} else {
	function sayHi(){
		alert("Yo!");
	}
}
```

这在ECMAScript 中属于无效语法，JavaScript 引擎会尝试修正错误，将其转换为合理的状态。但问题是浏览器尝试修正错误的做法并不一致。大多数浏览器会返回第二个声明，忽略condition；Firefox 会在condition 为true 时返回第一个声明。因此这种使用方式很危险。