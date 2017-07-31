# 能力检测

最常用也最为人们广泛接受的客户端检测形式是**能力检测**（又称**特性检测**）。能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。

采用这种方式不必顾及特定的浏览器如何如何，只要确定浏览器支持特定的能力，就可以给出解决方案。能力检测的基本模式如下：

```javascript
if (object.propertyInQuestion){
	//使用 object.propertyInQuestion
}
```

举例来说，IE5.0 之前的版本不支持 document.getElementById() 这个 DOM 方法。尽管可以使用非标准的 document.all 属性实现相同的目的，但 IE 的早期版本中确实不存在 document.getElementById() 。于是，也就有了类似下面的能力检测代码：

```javascript
function getElement(id){
	if (document.getElementById){
		return document.getElementById(id);
	} else if (document.all){
		return document.all[id];
  	} else {
		throw new Error("No way to retrieve element!");
	}
}
```

要理解能力检测，首先必须理解两个重要的概念。如前所述，第一个概念就是先检测达成目的的最常用的特性。对前面的例子来说，就是要先检测 document.getElementById() ，后检测 document.all 。先检测最常用的特性可以保证代码最优化，因为在多数情况下都可以避免测试多个条件。