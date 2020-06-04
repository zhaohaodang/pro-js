# 10.1.8 DocumentFragment类型

* 是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。 
* 用途：假设我们想为这个<ul>元素添加 3 个列表项。如果逐个地添加列表项，将会导致浏览器反复渲染。为避免这个问题，可以像下面这样使用一个文档片段来保存创建的列表项，然后再一次性将它们添加到文档中。

```javascript
var fragment = document.createDocumentFragment();
var ul = document.getElementById("myList");
var li = null;
for (var i=0; i < 3; i++){
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i+1)));
    fragment.appendChild(li);
}
ul.appendChild(fragment);
```