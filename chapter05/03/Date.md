# Date 类型

UTC（Coordinated Universal Time，国际协调时间）

要创建一个日期对象，使用new 操作符和Date 构造函数即可：

```javascript
var now = new Date()
```

在调用Date 构造函数而不传递参数的情况下，新创建的对象自动获得当前日期和时间。

如果想根据特定的日期和时间创建日期对象，ECMAScript 提供了两个方法：Date.parse()和Date.UTC()

Date.parse()方法接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数。如果传入Date.parse()方法的字符串不能表示日期，那么它会返回NaN。

实际上，如果直接将表示日期的字符串传递给Date 构造函数，也会在后台调用Date.parse()。

Date.UTC()方法同样也返回表示日期的毫秒数。Date.UTC()的参数分别是年份、基于0 的月份（一月是0，二月是1，以此类推）、月中的哪一天（1 到31）、小时数（0 到23）、分钟、秒以及毫秒数。在这些参数中，只有前两个参数（年和月）是必需的。

如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0。以下是两个使用Date.UTC()方法的例子：

```javascript
// GMT 时间2000 年1 月1 日午夜零时
var y2k = new Date(Date.UTC(2000, 0));
// GMT 时间2005 年5 月5 日下午5:55:55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
```

Date 构造函数接收的参数仍然与Date.UTC()相同:

```javascript
// 本地时间2000 年1 月1 日午夜零时
var y2k = new Date(2000, 0);
// 本地时间2005 年5 月5 日下午5:55:55
var allFives = new Date(2005, 4, 5, 17, 55, 55);
```

ECMAScript 5 添加了Data.now()方法，返回表示调用这个方法时的日期和时间的毫秒数。

```java
//取得开始时间
var start = Date.now();
//调用函数
doSomething();
//取得停止时间
var stop = Date.now(),
result = stop – start;
```

在不支持Data.now()方法浏览器中，使用+操作符把Data 对象转换成字符串，也可以达到同样的目的。

```javascript
//取得开始时间
var start = +new Date();
//调用函数
doSomething();
//取得停止时间
var stop = +new Date(),
result = stop - start;
```

