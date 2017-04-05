# RegExp 类型

ECMAScript 通过RegExp 类型来支持正则表达式。

```javascript
var expression = / pattern / flags ;
```

其中的模式（pattern）部分可以是任何简单或复杂的正则表达式。

标志（flags），用以标明正则表达式的行为，支持下列3 个标志：

* g：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止

* i：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写

* m：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

定义正则表达式：

```javascript
/*
* 匹配第一个"bat"或"cat"，不区分大小写
*/
var pattern1 = /[bc]at/i;
/*
* 与pattern1 相同，只不过是使用构造函数创建的
*/
var pattern2 = new RegExp("[bc]at", "i");
```
```javascript
/*
* 匹配字符串中所有"at"的实例
*/
var pattern1 = /at/g;
/*
* 匹配第一个"bat"或"cat"，不区分大小写
*/
var pattern2 = /[bc]at/i;
/*
* 匹配所有以"at"结尾的3 个字符的组合，不区分大小写
*/
var pattern3 = /.at/gi;
```

> 传递给RegExp 构造函数的两个参数都是字符串（不能把正则表达式字面量传递给RegExp 构造函数）

模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：`( [ { \ ^ $ | ) ? * + .]}`

在某些情况下要对字符进行双重转义

| 字面量模式            | 等价的字符串                |
| ---------------- | --------------------- |
| /\[bc\]at/       | "\\[bc\\]at"          |
| /\.at/           | "\\.at"               |
| /name\/age/      | "name\\/age"          |
| /\d.\d{1,2}/     | "\\d.\\d{1,2}"        |
| /\w\\hello\\123/ | "\\w\\\\hello\\\\123" |



