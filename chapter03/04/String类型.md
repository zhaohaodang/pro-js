# String类型

String 数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符

| 字面量    | 含义                                       |
| ------ | ---------------------------------------- |
| \n     | 换行                                       |
| \t     | 制表                                       |
| \b     | 空格                                       |
| \r     | 回车                                       |
| \f     | 进纸                                       |
| \\     | 斜杠                                       |
| \'     | 单引号（'），在用单引号表示的字符串中使用。例如：'He said, \'hey.\'' |
| \"     | 双引号（"），在用双引号表示的字符串中使用。例如："He said, \"hey.\"" |
| \xnn   | 以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\x41表示"A"   |
| \unnnn | 以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\u03a3表示希腊字符Σ |

```javascript
var text = "This is the letter sigma: \u03a3."
alert(text.length); // 输出28
```

这个例子中的变量text 有28 个字符，其中6 个字符长的转义序列表示1 个字符



数值、布尔值、对象和字符串值（没错，每个字符串也都有一个toString()方法，该方法返回字符串的一个副本）都有toString()方法。但null 和undefined 值没有这个方法。

toString()方法可以传递一个参数：输出数值的基数，例如：

```java
var num = 10;
alert(num.toString()); // "10"
alert(num.toString(2)); // "1010"
alert(num.toString(8)); // "12"
alert(num.toString(10)); // "10"
alert(num.toString(16)); // "a"
```

转型函数String()能够将任何类型的值转换为字符串，转换规则：

* 如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果
* 如果值是null，则返回"null"
* 如果值是undefined，则返回"undefined"



