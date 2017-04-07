# Function 类型

每个函数都是Function 类型的实例，函数实际上是对象，因此函数名实际上也是一个指向函数对象的指针。

Function 构造函数可以接收任意数量的参数，但最后一个参数始终都被看成是函数体。

```javascript
var sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐
```

这种语法会导致解析两次代码（第一次是解析常规ECMAScript 代码，第二次是解析传入构造函数中的字符串）

由于函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量没有什么不同。

```javascript
function sum(num1, num2){
	return num1 + num2;
}
alert(sum(10,10)); //20
var anotherSum = sum;
alert(anotherSum(10,10)); //20
sum = null;
alert(anotherSum(10,10)); //20
```

