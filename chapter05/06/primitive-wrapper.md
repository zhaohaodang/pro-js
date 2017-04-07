# 基本包装类型

为了便于操作基本类型值，ECMAScript 还提供了3 个特殊的引用类型：Boolean、Number 和String。

实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据：

```javascript
var s1 = "some text";
var s2 = s1.substring(2);
```

当第二行代码访问s1 时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值。而在读取模式中访问字符串时，后台都会自动完成下列处理：

1. 创建String 类型的一个实例
2. 在实例上调用指定的方法
3. 销毁这个实例

> 上面这三个步骤也分别适用于Boolean和Number 类型对应的布尔值和数字值。

引用类型与基本包装类型的主要区别就是对象的生存期。使用new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们**不能在运行时为基本类型值添加属性和方法**，这样做是没有意义的：

```javascript
var s1 = "some text";
s1.color = "red";
alert(s1.color); //undefined
```

第二行代码试图为字符串s1 添加一个color 属性。但是，当第三行代码再次访问s1 时，其color 属性不见了。问题的原因就是第二行创建的String 对象在执行第三行代码时已经被销毁了。第三行代码又创建自己的String 对象，而该对象没有color 属性。

Object 构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例：

```javascript
var obj = new Object("some text");
alert(obj instanceof String); //true
```

要注意的是，使用new 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的：

```javascript
var value = "25";
var number = Number(value); //转型函数
alert(typeof number); //"number"
var obj = new Number(value); //构造函数
alert(typeof obj); //"object"
```

