# 10.1.3 Element类型

* 除了 Document 类型之外， Element 类型就要算是 Web 编程中最常用的类型了。
* 要访问元素的标签名，可以使用 nodeName 属性，也可以使用 tagName 属性。
* 操作特性的DOM 方法主要有三个，分别是 getAttribute()、 setAttribute()和 removeAttribute()。
* 有两类特殊的特性，它们虽然有对应的属性名，但属性的值与通过 getAttribute()返回的值并不相同。第一个是style，第二个是类似onclick这样的事件处理程序。
* 通过 setAttribute()方法可以设置自定义属性值，但是通过赋值的方式无法做到这一点。例如：
```javascript
div.mycolor = "red";// 无效
alert(div.getAttribute("mycolor")); //null（ IE 除外）
```
* 使用 document.createElement()方法可以创建新元素。这个方法只接受一个参数，即要创建元素的标签名。