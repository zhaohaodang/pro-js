# switch语句

switch 语句与if 语句的关系最为密切，而且也是在其他语言中普遍使用的一种流控制语句

switch 语句在比较值时使用的是**全等操作符**，不会发生类型转换

```javascript
switch (expression) {
	case value: statement
		break;
	case value: statement
		break;
	case value: statement
		break;
	case value: statement
		break;
    default: statement
    	break;
}
```

假如确实需要混合几种情形，不要忘了在代码中添加注释：

```javascript
switch (i) {
	case 25:
	/* 合并两种情形 */
	case 35:
		alert("25 or 35");
		break;
	case 45:
		alert("45");
		break;
	default:
		alert("Other");
}
```

JavaScript中的switch也有自己的特色

首先，可以在switch 语句中使用任何数据类型，无论是字符串，还是对象都没有问题。

其次，每个case 的值不一定是常量，可以是变量，甚至是表达式。请看下面这个例子：

```javascript
switch ("hello world") {
	case "hello" + " world":
		alert("Greeting was found.");
		break;
	case "goodbye":
		alert("Closing was found.");
		break;
	default:
		alert("Unexpected message was found.");
}
```

使用表达式：

```javascript
var num = 25;
switch (true) {
	case num < 0:
		alert("Less than 0.");
		break;
	case num >= 0 && num <= 10:
		alert("Between 0 and 10.");
		break;
	case num > 10 && num <= 20:
		alert("Between 10 and 20.");
		break;
	default:
		alert("More than 20.");
}
```

