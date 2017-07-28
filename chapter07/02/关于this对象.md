# 关于this对象

this 对象是在运行时基于函数的执行环境绑定的：在全局函数中， this 等于 window ，而当函数被作为某个对象的方法调用时， this 等于那个对象。

匿名函数的执行环境具有全局性，因此其 this 对象**通常**指向 window。

```javascript
var name = "The Window";
var object = {
	name : "My Object",
	getNameFunc : function(){
		return function(){
			return this.name;
		};
	}
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）
```

在几种特殊情况下， this 的值可能会意外地改变：

```javascript
var name = "The Window";
var object = {
	name : "My Object",
	getName: function(){
		return this.name;
	}
};
```

这里的 getName() 方法只简单地返回 this.name 的值。以下是几种调用 object.getName() 的方式以及各自的结果。

```javascript
object.getName(); //"My Object"
(object.getName)(); //"My Object"
(object.getName = object.getName)(); //"The Window"，在非严格模式下
```

第一行代码跟平常一样调用了 object.getName() ，返回的是 "My Object" ，因为 this.name就是 object.name 。第二行代码在调用这个方法前先给它加上了括号。虽然加上括号之后，就好像只是在引用一个函数，但 this 的值得到了维持，因为 object.getName 和 (object.getName) 的定义是相同的。第三行代码先执行了一条赋值语句，然后再调用赋值后的结果。因为这个赋值表达式的值是函数本身，所以 this 的值不能得到维持，结果就返回了 "The Window" 。