# Number类型

Number 是与数字值对应的引用类型。

与Boolean 类型一样，Number 类型也重写了valueOf()、toLocaleString()和toString()方法。重写后的valueOf()方法返回对象表示的基本类型的数值。

除了继承的方法之外，Number 类型还提供了一些用于将数值格式化为字符串的方法。

其中，toFixed()方法会按照指定的小数位返回数值的字符串表示：

```javascript
var num = 10;
alert(num.toFixed(2)); //"10.00"
```

如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值
就会舍入：

```javascript
var num = 10.005;
alert(num.toFixed(2)); //"10.01"
```

另外可用于格式化数值的方法是toExponential()，该方法返回以指数表示法（也称e 表示法）表示的数值的字符串形式：

```javascript
var num = 10;
alert(num.toExponential(1)); //"1.0e+1"
```

如果你想得到表示某个数值的最合适的格式，就应该使用toPrecision()方法。这个方法接收一个参数，即表示数值的所有数字的位数（不包括指数部分）：

```javascript
var num = 99;
alert(num.toPrecision(1)); //"1e+2"
alert(num.toPrecision(2)); //"99"
aler t(num.toPrecision(3)); //"99.0"
```

> toPrecision()会根据要处理的数值决定到底是调用toFixed()还是调用toExponential()