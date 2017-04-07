# RegExp实例方法

RegExp 对象的主要方法是exec()，该方法是专门为捕获组而设计的。

exec()接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回null。

返回的数组虽然是Array 的实例，但包含两个额外的属性：index 和input。index 表示匹配项在字符串中的位置，而input 表示应用正则表达式的字符串。

在返回的数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项）。

```javascript
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index); // 0
alert(matches.input); // "mom and dad and baby"
alert(matches[0]); // "mom and dad and baby"
alert(matches[1]); // " and dad and baby"
alert(matches[2]); // " and baby"
```

对于exec()方法而言，即使在模式中设置了全局标志（g），它每次也只会返回一个匹配项。在不设置全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息。而在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项。

```javascript
var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0

matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0


var pattern2 = /.at/g;
var matches = pattern2.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern2.lastIndex); //3

matches = pattern2.exec(text);
alert(matches.index); //5
alert(matches[0]); //bat
alert(pattern2.lastIndex); //8
```

> 这个例子中的第一个模式pattern1 不是全局模式，因此每次调用exec()返回的都是第一个匹配项（"cat"）。而第二个模式pattern2 是全局模式，因此每次调用exec()都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。

> IE 的JavaScript 实现在lastIndex 属性上存在偏差，即使在非全局模式下，lastIndex 属性每次也会变化。

正则表达式的第二个方法是test()，它接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则，返回false。

```javascript
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
	alert("The pattern was matched.");
}
```

RegExp 实例继承的toLocaleString()和toString()方法都会返回正则表达式的字面量，与创建正则表达式的方式无关：

```javascript
var pattern = new RegExp("\\[bc\\]at", "gi");
alert(pattern.toString()); // /\[bc\]at/gi
alert(pattern.toLocaleString()); // /\[bc\]at/gi
```

