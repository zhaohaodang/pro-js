# 递归

递归函数是在一个函数通过名字调用自身的情况下构成的，如下所示。

```javascript
function factorial(num){
	if (num <= 1){
		return 1;
	} else {
		return num * factorial(num-1);
	}
}
```

这是一个经典的递归阶乘函数。虽然这个函数表面看来没什么问题，但下面的代码却可能导致它出错。

```javascript
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //出错！
```

在接下来调用anotherFactorial()时，由于必须执行factorial()，而factorial 已经不再是函数，所以就会导致错误。在这种情况下，使用arguments.callee 可以解决这个问题。

```javascript
function factorial(num){
	if (num <= 1){
		return 1;
	} else {
		return num * arguments.callee(num-1);
	}
}
```

通过使用arguments.callee 代替函数名，可以确保无论怎样调用函数都不会出问题。因此，在编写递归函数时，使用arguments.callee 总比使用函数名更保险。

但在严格模式下，不能通过脚本访问arguments.callee，访问这个属性会导致错误。不过，可以使用命名函数表达式来达成相同的结果。例如：

```javascript
var factorial = (function f(num){
	if (num <= 1){
		return 1;
	} else {
		return num * f(num-1);
	}
});
```

以上代码创建了一个名为f()的命名函数表达式，然后将它赋值给变量factorial。即便把函数赋值给了另一个变量，函数的名字f 仍然有效，所以递归调用照样能正确完成。这种方式在严格模式和非严格模式下都行得通。