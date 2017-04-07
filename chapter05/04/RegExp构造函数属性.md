# RegExp构造函数属性

RegExp 构造函数包含一些属性，这些属性分别有一个长属性名和一个短属性名（Opera 是例外，它不支持短属性名）。


| 长属性名         | 短属性名 | 说 明                                 |
| ------------ | ---- | ----------------------------------- |
| input        | $_   | 最近一次要匹配的字符串。Opera未实现此属性             |
| lastMatch    | $&   | 最近一次的匹配项。Opera未实现此属性                |
| lastParen    | $+   | 最近一次匹配的捕获组。Opera未实现此属性              |
| leftContext  | $`   | input字符串中lastMatch之前的文本             |
| multiline    | $*   | 布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性 |
| rightContext | $'   | Input字符串中lastMatch之后的文本             |

使用这些属性可以从exec()或test()执行的操作中提取出更具体的信息：

```javascript
var text = "this has been a short summer";
var pattern = /(.)hort/g;
/*
* 注意：Opera 不支持input、lastMatch、lastParen 和multiline 属性
* Internet Explorer 不支持multiline 属性
*/
if (pattern.test(text)){
	alert(RegExp.input); // this has been a short summer
	alert(RegExp.leftContext); // this has been a
	alert(RegExp.rightContext); // summer
	alert(RegExp.lastMatch); // short
	alert(RegExp.lastParen); // s
	alert(RegExp.multiline); // false
}
```

由于这些短属性名大都不是有效的ECMAScript 标识符，因此必须通过方括号语法来访问它们：

```javascript
var text = "this has been a short summer";
var pattern = /(.)hort/g;
/*
* 注意：Opera 不支持input、lastMatch、lastParen 和multiline 属性
* Internet Explorer 不支持multiline 属性
*/
if (pattern.test(text)){
	alert(RegExp.$_); // this has been a short summer
	alert(RegExp["$`"]); // this has been a
	alert(RegExp["$'"]); // summer
	alert(RegExp["$&"]); // short
	alert(RegExp["$+"]); // s
	alert(RegExp["$*"]); // false
}
```

除了上面介绍的几个属性之外，还有多达9 个用于存储捕获组的构造函数属性。

访问这些属性的语法是`RegExp.$1`…`RegExp.$9`，分别用于存储第一、第二……第九个匹配的捕获组。

```javascript
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;
if (pattern.test(text)){
	alert(RegExp.$1); //sh
	alert(RegExp.$2); //t
}
```

