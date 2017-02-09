# 变量

ECMAScript 的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。

给未经声明的变量赋值在严格模式下会导致抛出**ReferenceError** 错误

可以使用一条语句定义多个变量

```javascript
var message = "hi",
	found = false,
	age = 29;
```

> 虽然代码里的换行和变量缩进不是必需的，但这样做可以提高可读性。

