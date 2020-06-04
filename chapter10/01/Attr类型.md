# 10.1.9 Attr类型

* Attr 对象有 3 个属性： name、 value 和 specified。其中， name 是特性名称（与 nodeName 的值相同）， value 是特性的值（与 nodeValue 的值相同），而 specified 是一个布尔值，用以区别特性是在代码中指定的，还是默认的。
*  使用 getAttributeNode 可以获取属性节点，但是， getAttribute()、 setAttribute()和 removeAttribute()方法远比操作特性节点更为方便。
* 使用 document.createAttribute()并传入特性的名称可以创建新的特性节点。