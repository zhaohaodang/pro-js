# Document类型

在浏览器中， document 对象是 HTMLDocument （继承自 Document 类型）的一个实例，表示整个 HTML 页面。而且， document 对象是 window 对象的一个属性，因此可以将其作为全局对象来访问。

Document 节点具有下列特征：

* nodeType 的值为 9
* nodeName 的值为 "#document"
* nodeValue 的值为 null
* parentNode 的值为 null
* ownerDocument 的值为  null
* 其子节点可能是一个 DocumentType （最多一个）、 Element （最多一个）、 ProcessingInstruction或 Comment 

通过这个文档对象，不仅可以取得与页面有关的信息，而且还能操作页面的外观及其底层结构。

### 1.文档的子节点

有两个内置的访问其子节点的快捷方式。第一个就是 documentElement属性，该属性始终指向 HTML 页面中的 `<html> `元素。

document 对象还有一个 body 属性，直接指向 `<body>`元素。因为开发人员经常要使用这个元素，所以 document.body 在 JavaScript代码中出现的频率非常高。

Document 另一个可能的子节点是 DocumentType 。通常将 <!DOCTYPE> 标签看成一个与文档其他部分不同的实体，可以通过 doctype 属性（在浏览器中是 document.doctype ）来访问它的信息。

```javascript
var doctype = document.doctype; //取得对<!DOCTYPE>的引用
```

### 2. 文档信息

作为 HTMLDocument 的一个实例， document 对象还有一些标准的 Document 对象所没有的属性。其中第一个属性就是 title ，包含着`<title> `元素中的文本。

接下来要介绍的 3 个属性都与对网页的请求有关，它们是 URL 、 domain 和 referrer 。 URL 属性中包含页面完整的 URL（即地址栏中显示的 URL）， domain 属性中只包含页面的域名，而 referrer属性中则保存着链接到当前页面的那个页面的 URL。

在这 3 个属性中，只有 domain 是可以设置的。但由于安全方面的限制，也并非可以给 domain 设置任何值。如果 URL 中包含一个子域名，例如 p2p.wrox.com，那么就只能将 domain 设置为 "wrox.com"。

由于 跨 域 安 全 限 制 ， 来 自 不 同 子 域 的 页 面 无 法 通 过 JavaScript 通 信 。 而 通 过 将 每 个 页 面 的document.domain 设置为相同的值，这些页面就可以互相访问对方包含的 JavaScript 对象了。

浏览器对 domain 属性还有一个限制，即如果域名一开始是“松散的”（loose），那么不能将它再设置为“紧绷的”（tight）。换句话说，在将 document.domain 设置为 "wrox.com" 之后，就不能再将其设置回"p2p.wrox.com" ，否则将会导致错误，如下面的例子所示。

```javascript
//假设页面来自于 p2p.wrox.com 域
document.domain = "wrox.com"; //松散的（成功）
document.domain = "p2p.wrox.com"; //紧绷的（出错！）
```

### 3. 查找元素

说到最常见的 DOM 应用，恐怕就要数取得特定的某个或某组元素的引用，然后再执行一些操作了。取得元素的操作可以使用 document 对象的几个方法来完成。其中， Document 类型为此提供了两个方法： getElementById() 和 getElementsByTagName() 。

如果页面中多个元素的 ID 值相同， getElementById() 只返回文档中第一次出现的元素。

 getElementsByTagName() 这个方法接受一个参数，即要取得元素的标签名，而返回的是包含零或多个元素的 NodeList 。在 HTML 文档中，这个方法会返回一个 HTMLCollection 对象。

```javascript
var images = document.getElementsByTagName("img")
```

> 这行代码会将一个 HTMLCollection 对象保存在 images 变量中，与 NodeList 对象类似。

HTMLCollection 对象还有一个方法，叫做 namedItem() ，使用这个方法可以通过元素的 name特性取得集合中的项。例如，假设上面提到的页面中包含如下 `<img> `元素：

```html
<img src="myimage.gif" name="myImage">
```

那么就可以通过如下方式从 images 变量中取得这个 `<img> `元素：

```javascript
var myImage = images.namedItem("myImage")
```

对命名的项也可以使用方括号语法来访问，如下所示：

```javascript
var myImage = images["myImage"]
```

第三个方法，也是只有 HTMLDocument 类型才有的方法，是 getElementsByName() 。顾名思义，这个方法会返回带有给定 name 特性的所有元素。

### 4. 特殊集合

除了属性和方法， document 对象还有一些特殊的集合。这些集合都是 HTMLCollection 对象，为访问文档常用的部分提供了快捷方式，包括：

* document.anchors ，包含文档中所有带 name 特性的` <a> `元素
* document.applets ，包含文档中所有的 `<applet> `元素，因为不再推荐使用` <applet> `元素，所以这个集合已经不建议使用了
* document.forms ，包含文档中所有的` <form> `元素，与 document.getElementsByTagName("form")得到的结果相同
* document.images ，包含文档中所有的` <img>` 元素，与 document.getElementsByTagName("img") 得到的结果相同
* document.links ，包含文档中所有带 href 特性的 `<a>` 元素

### 5. DOM 一致性检测

DOM1 级只为 document.implementation 规定了一个方法，即 hasFeature() 。这个方法接受两个参数：要检测的 DOM 功能的名称及版本号。如果浏览器支持给定名称和版本的功能，则该方法返回 true ，如下面的例子所示：

```javascript
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
```

### 6. 文档写入

有一个 document 对象的功能已经存在很多年了，那就是将输出流写入到网页中的能力。这个能力体现在下列 4 个方法中： write() 、 writeln() 、 open() 和 close() 。其中， write() 和 writeln()方法都接受一个字符串参数，即要写入到输出流中的文本。 write() 会原样写入，而 writeln() 则会在字符串的末尾添加一个换行符（ \n ）。

```html
<html>
	<head>
		<title>document.write() Example</title>
	</head>
<body>
	<p>The current date and time is:
	<script type="text/javascript">
		document.write("<strong>" + (new Date()).toString() + "</strong>");
	</script>
	</p>
</body>
</html>
```

这个例子展示了在页面加载过程中输出当前日期和时间的代码。其中，日期被包含在一个` <strong>`元素中，就像在 HTML 页面中包含普通的文本一样。这样做会创建一个 DOM 元素，而且可以在将来访问该元素。

还可以使用 write() 和 writeln() 方法动态地包含外部资源，例如 JavaScript 文件等。在包含 JavaScript 文件时，必须注意不能像下面的例子那样直接包含字符串 `</script>` ，因为这会导致该字符串被解释为脚本块的结束，它后面的代码将无法执行。

```html
<html>
	<head>
		<title>document.write() Example 2</title>
	</head>
<body>
	<script type="text/javascript">
	document.write("<script type=\"text/javascript\" src=\"file.js\">" +
	"</script>");
	</script>
</body>
</html>
```

解决方案如下：

```html
<html>
	<head>
		<title>document.write() Example 2</title>
	</head>
<body>
	<script type="text/javascript">
	document.write("<script type=\"text/javascript\" src=\"file.js\">" +
	"<\/script>");
	</script>
</body>
</html>
```

