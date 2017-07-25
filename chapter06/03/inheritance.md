# 继承

继承是OO 语言中的一个最为人津津乐道的概念。许多OO 语言都支持两种继承方式：**接口继承**和**实现继承**。

接口继承只继承方法签名，而实现继承则继承实际的方法。

如前所述，由于函数没有签名，在ECMAScript 中无法实现接口继承。**ECMAScript 只支持实现继承**，而且其实现继承主要是依靠原型链来实现的。

简单回顾一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样呢？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓原型链的基本概念。

实现原型链有一种基本模式，其代码大致如下。

```javascript
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
	return this.subproperty;
};
var instance = new SubType();
alert(instance.getSuperValue());
```

这个例子中的实例以及构造函数和原型之间的关系如图6-4 所示。

![https://sinacloud.net/pro-js/6-4.jpg](https://sinacloud.net/pro-js/6-4.jpg)

继承是通过创建SuperType 的实例，并将该实例赋给SubType.prototype 实现的。实现的本质是重写原型对象，代之以一个新类型的实例。换句话说，原来存在于SuperType 的实例中的所有属性和方法，现在也存在于SubType.prototype 中了。在确立了继承关系之后，我们给SubType.prototype 添加了一个方法，这样就在继承了SuperType 的属性和方法的基础上又添加了一个新方法。

> 注意instance.constructor 现在指向的是SuperType，这是因为原来SubType.prototype 中的constructor 被重写了的缘故。

### 1. 别忘记默认的原型

事实上，前面例子中展示的原型链还少一环。我们知道，**所有引用类型默认都继承了Object**，而这个继承也是通过原型链实现的。大家要记住，所有函数的默认原型都是Object 的实例，因此**默认原型都会包含一个内部指针，指向Object.prototype**。这也正是所有自定义类型都会继承toString()、valueOf()等默认方法的根本原因。所以，我们说上面例子展示的原型链中还应该包括另外一个继承层次。图6-5 为我们展示了该例子中完整的原型链。

![https://sinacloud.net/pro-js/6-5.jpg](https://sinacloud.net/pro-js/6-5.jpg)

一句话，SubType 继承了SuperType，而SuperType 继承了Object。当调用instance.toString()时，实际上调用的是保存在Object.prototype 中的那个方法。

### 2. 确定原型和实例的关系

可以通过两种方式来确定原型和实例之间的关系。第一种方式是使用instanceof 操作符，只要用这个操作符来测试**实例与原型链中出现过的构造函数**，结果就会返回true

```javascript
alert(instance instanceof Object); //true
alert(instance instanceof SuperType); //true
alert(instance instanceof SubType); //true
```

第二种方式是使用isPrototypeOf()方法。同样，只要是**原型链中出现过的原型**，都可以说是该原型链所派生的实例的原型，因此isPrototypeOf()方法也会返回true，如下所示。

```javascript
alert(Object.prototype.isPrototypeOf(instance)); //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance)); //true
```

### 3. 谨慎地定义方法

子类型有时候需要重写超类型中的某个方法，或者需要添加超类型中不存在的某个方法。但不管怎样，**给原型添加方法的代码一定要放在替换原型的语句之后**。来看下面的例子。

```javascript
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSubValue = function (){
	return this.subproperty;
};
//重写超类型中的方法
SubType.prototype.getSuperValue = function (){
	return false;
};
var instance = new SubType();
alert(instance.getSuperValue()); //false
```

还有一点需要提醒读者，即在通过原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会**重写原型链**，如下面的例子所示。

```javascript
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
	getSubValue : function (){
		return this.subproperty;
	},
	someOtherMethod : function (){
		return false;
	}
};
var instance = new SubType();
alert(instance.getSuperValue()); //error!
```

以上代码展示了刚刚把SuperType 的实例赋值给原型，紧接着又将原型替换成一个对象字面量而导致的问题。由于现在的原型包含的是一个Object 的实例，而非SuperType 的实例，因此我们设想中的原型链已经被**切断**——SubType 和SuperType 之间已经没有关系了。

### 4. 原型链的问题

原型链虽然很强大，可以用它来实现继承，但它也存在一些问题。其中，最主要的问题来自包含引用类型值的原型。下列代码可以用来说明这个问题。

```javascript
function SuperType(){
	this.colors = ["red", "blue", "green"];
}
function SubType(){
}
//继承了SuperType
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green,black"
```

SubType 的所有实例都会共享这一个colors 属性。而我们对instance1.colors 的修改能够通过instance2.colors 反映出来，就已经充分证实了这一点。

原型链的第二个问题是：在创建子类型的实例时，不能向超类型的构造函数中传递参数。实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。

有鉴于此，再加上前面刚刚讨论过的由于原型中包含引用类型值所带来的问题，实践中很少会单独使用原型链。