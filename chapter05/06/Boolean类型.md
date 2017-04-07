# 函数属性和方法

Boolean 类型是与布尔值对应的引用类型。

Boolean 类型的实例重写了valueOf()方法，返回基本类型值true 或false；重写了toString()方法，返回字符串"true"和"false"。

Boolean 对象在ECMAScript 中最常见的问题就是在布尔表达式中使用Boolean 对象：

```javascript
var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result); //true

var falseValue = false;
result = falseValue && true;
alert(result); //false
```

在这个例子中，我们使用false 值创建了一个Boolean 对象。然后，将这个对象与基本类型值true构成了逻辑与表达式。在布尔运算中，false && true 等于false。可是，示例中的这行代码是对falseObject 而不是对它的值（false）进行求值。前面讨论过，布尔表达式中的所有对象都会被转换为true，因此falseObject 对象在布尔表达式中代表的是true。结果，true && true 当然就等于true 了。