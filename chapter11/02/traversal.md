# 11.2 元素遍历

因为空白文本节点的存在，不同的浏览器在获取子节点的时候表现不一样，有的返回空白文本节点，而有的不。为了抹平这一差距，诞生了一组新的属性。例如firstElementChild方法，它是firstChild的元素版本，它不会返回空白文本。其他的获取子节点以及相对应的元素版本：
* childElementCount：返回子元素（不包括文本节点和注释）的个数。
* lastElementChild：指向最后一个子元素； lastChild 的元素版。
* previousElementSibling：指向前一个同辈元素； previousSibling 的元素版。
* nextElementSibling：指向后一个同辈元素； nextSibling 的元素版。