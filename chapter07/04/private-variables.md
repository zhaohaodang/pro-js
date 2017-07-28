# 私有变量

严格来讲，JavaScript 中没有私有成员的概念；所有对象属性都是公有的。不过，倒是有一个私有变量的概念。任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量。

```javascript
function add(num1, num2){
	var sum = num1 + num2;
	return sum;
}
```

我们把有权访问私有变量和私有函数的公有方法称为**特权方法**（privileged method）。

有两种在对象上创建特权方法的方式。第一种是在构造函数中定义特权方法，基本模式如下。

```javascript
function MyObject(){
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//特权方法
	this.publicMethod = function (){
		privateVariable++;
		return privateFunction();
	};
}
```

在创建 MyObject 的实例后，除了使用 publicMethod() 这一个途径外，没有任何办法可以直接访问 privateVariable 和 privateFunction() 。

利用私有和特权成员，可以隐藏那些不应该被直接修改的数据，例如：

```javascript
function Person(name){
	this.getName = function(){
		return name;
	};
	this.setName = function (value) {
		name = value;
	};
}
var person = new Person("Nicholas");
alert(person.getName()); //"Nicholas"
person.setName("Greg");
alert(person.getName()); //"Greg"
```

在 Person 构造函数外部，没有任何办法访问 name 。