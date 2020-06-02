# 10.1.5 Comment类型

* nodeName 的值为"#comment"。
* Comment 类型与 Text 类型继承自相同的基类，因此它拥有除 splitText()之外的所有字符串操作方法。与 Text 类型相似，也可以通过 nodeValue 或 data 属性来取得注释的内容。
* 可以使用 document.createComment()，并为其传递注释文本创建注释节点。