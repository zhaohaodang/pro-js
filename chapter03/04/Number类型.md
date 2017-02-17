# Number类型

##### *浮点数值*

除了以十进制表示外，整数还可以通过八进制（以8 为基数）或十六进制（以16 为基数）的字面值
来表示。其中，八进制字面值的第一位必须是零（0），然后是八进制数字序列（0～7）。如果字面值中的
数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制数值解析。

```javascript
var octalNum1 = 070; // 八进制的56
var octalNum2 = 079; // 无效的八进制数值——解析为79
var octalNum3 = 08; // 无效的八进制数值——解析为8
```

> 八进制字面量在严格模式下是无效的，会导致支持的JavaScript 引擎抛出错误

由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript 会不失时机地将浮点数值转换为整数值。显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。

在默认情况下，ECMASctipt 会将那些小数点后面带有6 个零以上的浮点数值转换为以e 表示法
表示的数值（例如，0.0000003 会被转换成3e.7）。

IEEE754 标准导致的误差

```javascript
var sum=0.1+0.2
sum==0.3 //false sum=0.30000000000000004
```

##### *数值范围*

最小数值：Number.MIN_VALUE，5e-324

最大数值：Number.MAX_VALUE，1.7976931348623157e+308

超出数值范围：-Infinity（负无穷）Infinity（正无穷）

判断一个数值是不是**有穷**数值：isFinite()

```javascript
var result = Number.MAX_VALUE + Number.MAX_VALUE;
alert(isFinite(result)); //false
```

##### ***NaN***

NaN，即非数值（Not a Number）是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况，比如任何数值除以0会返回NaN。

NaN两个特性：

- 任何涉及NaN 的操作都会返回NaN
- NaN 与任何值都不相等，包括NaN 本身

***数值转换***

有3 个函数可以把非数值转换为数值：Number()、parseInt()和parseFloat()

Number()函数转换规则：

* true 和false 将分别被转换为1 和0
* 如果是数字值，只是简单的传入和返回
* 如果是null 值，返回0
* 如果是undefined，返回NaN
* 如果是字符串，遵循下列规则：
  * 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"
    会变成1，"123"会变成123，而"011"会变成11（忽略前导零）
  * 如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（忽
    略前导零）
  * 如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整
    数值
  * 如果字符串是空的（不包含任何字符），则将其转换为0
  * 如果字符串中包含除上述格式之外的字符，则将其转换为NaN

Number()函数使用举例：

```javascript
var num1 = Number("Hello world!"); //NaN
var num2 = Number(""); //0
var num3 = Number("000011"); //11
var num4 = Number(true); //1
```

parseInt()函数使用举例：

```javascript
var num1 = parseInt("1234blue"); // 1234
var num2 = parseInt(""); // NaN
var num3 = parseInt("0xA"); // 10（十六进制数）
var num4 = parseInt(22.5); // 22
var num5 = parseInt("070"); // 在ES3下等于56（八进制数）在ES5下等于70（十进制）
var num6 = parseInt("70"); // 70（十进制数）
var num7 = parseInt("0xf"); // 15（十六进制数）
var num8 = parseInt(".12");//NaN
```

parseFloat()函数使用举例：

```javascript
var num1 = parseFloat("1234blue"); //1234 （整数）
var num2 = parseFloat("0xA"); //0
var num3 = parseFloat("22.5"); //22.5
var num4 = parseFloat("22.34.5"); //22.34
var num5 = parseFloat("0908.5"); //908.5
var num6 = parseFloat("3.125e7"); //31250000
```

