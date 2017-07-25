# 闭包

有不少开发人员总是搞不清匿名函数和闭包这两个概念，因此经常混用。闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数。

仍以前面的createComparisonFunction()函数为例：

```javascript
function createComparisonFunction(propertyName) {
	return function(object1, object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2){
			return -1;
		} else if (value1 > value2){
			return 1;
		} else {
			return 0;
		}
	};
}
```

当某个函数被调用时，会创建一个执行环境（execution context）及相应的作用域链。然后，使用arguments 和其他命名参数的值来初始化函数的活动对象（activation object）。但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，……直至作为作用域链终点的全局执行环境。

来看下面的例子。

```javascript
function compare(value1, value2){
	if (value1 < value2){
		return -1;
	} else if (value1 > value2){
		return 1;
	} else {
		return 0;
	}
}
var result = compare(5, 10);
```

当调用compare()时，会创建一个包含arguments、value1 和value2 的活动对象。全局执行环境的变量对象（包含result和compare）在compare()执行环境的作用域链中则处于第二位。图7-1 展示了包含上述关系的
compare()函数执行时的作用域链。

![https://sinacloud.net/pro-js/7-1.jpg](https://sinacloud.net/pro-js/7-1.jpg)

