# 在XHTML中的用法

可扩展超文本标记语言，即XHTML（Extensible HyperText Markup Language），是将HTML 作为XML 的应用而重新定义的一个标准。

在HTML 中，有特殊的规则用以确定`<script>`元素中的哪些内容可以被解析，但这些特殊的规则在XHTML 中不适用，如下。

```html
<script type="text/javascript">
function compare(a, b) {
	if (a < b) {
		alert("A is less than B");
	} else if (a > b) {
		alert("A is greater than B");
	} else {
		alert("A is equal to B");
	}
}
</script>
```

这里比较语句a < b 中的小于号（<）在XHTML 中将被当作开始一个新标签来解析。但是作为标签来讲，小于号后面不能跟空格，因此就会导致语法错误。

解决方案：

1. 用相应的HTML 实体（<）替换代码中所有的小于号（<）