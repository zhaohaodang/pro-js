# Object类型

```javascript
var o = new Object();
var o = new Object; // 有效，但不推荐省略圆括号
```

Object 的每个实例都具有下列属性和方法

* constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()
* hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例
  的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）
* isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第5 章将讨论原型）
* propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in 语句（本章后面将会讨论）来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定
* toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应
* toString()：返回对象的字符串表示
* valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同