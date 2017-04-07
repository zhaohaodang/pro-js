# String类型

String 类型是字符串的对象包装类型。

String 类型的每个实例都有一个length 属性，表示字符串中包含多个字符。

应该注意的是，即使字符串中包含双字节字符（不是占一个字节的ASCII 字符），每个字符也仍然算一个字符。

String 类型提供了很多方法，用于辅助完成对ECMAScript 中字符串的解析和操作。

*字符方法*

两个用于访问字符串中特定字符的方法是：charAt()和charCodeAt()。

charAt()方法以**单字符字符串**的形式返回给定位置的那个字符。

```javascript
var stringValue = "hello world";
alert(stringValue.charAt(1)); //"e"
```

charCodeAt()方法以**字符编码**的形式返回给定位置的那个字符。

```javascript
var stringValue = "hello world";
alert(stringValue.charCodeAt(1)); //输出"101"
```

ECMAScript 5 还定义了另一个访问个别字符的方法，可以使用方括号加数字索引来访问字符串中的特定字符：

```javascript
var stringValue = "hello world";
alert(stringValue[1]); //"e"
```

*字符串操作方法*

concat()方法可以接受任意多个参数，也就是说可以通过它拼接任意多个字符串：

```javascript
var stringValue = "hello ";
var result = stringValue.concat("world", "!");
alert(result); //"hello world!"
alert(stringValue); //"hello"
```

ECMAScript 还提供了三个基于子字符串创建新字符串的方法：slice()、substr()和substring()。
这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。

第一个参数指定子字符串的开始位置，第二个参数表示子字符串到哪里结束。

slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。而substr()的第二个参数指定的则是返回的字符个数。

**substring()这个方法会将较小的数作为开始位置，将较大的数作为结束位置。**

如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。

slice()、substr()和substring()不会修改字符串本身的值——它们只是返回一个基本类型的字符串值，对原始字符串没有任何影响：

```javascript
var stringValue = "hello world";
alert(stringValue.slice(3)); //"lo world"
alert(stringValue.substring(3)); //"lo world"
alert(stringValue.substr(3)); //"lo world"
alert(stringValue.slice(3, 7)); //"lo w"
alert(stringValue.substring(3,7)); //"lo w"
alert(stringValue.substr(3, 7)); //"lo worl"
```

在传递给这些方法的参数是负值的情况下，slice()方法会将传入的负值与字符串的长度相加。

substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0。

substring()方法会把所有负值参数都转换为0。

```javascript
var stringValue = "hello world";
alert(stringValue.slice(-3)); //"rld"
alert(stringValue.substring(-3)); //"hello world"
alert(stringValue.substr(-3)); //"rld"
alert(stringValue.slice(3, -4)); //"lo w"
alert(stringValue.substring(3, -4)); //"hel"
alert(stringValue.substr(3, -4)); //""（空字符串）
```

*字符串位置方法*

有两个可以从字符串中查找子字符串的方法：indexOf()和lastIndexOf()。

这两个方法都是从一个字符串中搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。

indexOf()方法从字符串的**开头**向后搜索子字符串。

lastIndexOf()方法是从字符串的**末尾**向前搜索子字符串。

```javascript
var stringValue = "hello world";
alert(stringValue.indexOf("o")); //4
alert(stringValue.lastIndexOf("o")); //7
```

这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索。

```javascript
var stringValue = "hello world";
alert(stringValue.indexOf("o", 6)); //7
alert(stringValue.lastIndexOf("o", 6)); //4
```

