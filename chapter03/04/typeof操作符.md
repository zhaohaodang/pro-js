# typeof操作符

检测给定变量的**数据类型**——typeof

对一个值使用typeof 操作符可能返回下列某个**字符串**：

- "undefined"——如果这个值未定义
- "boolean"——如果这个值是布尔值
- "string"——如果这个值是字符串
- "number"——如果这个值是数值
- "object"——如果这个值是对象或null
- "function"——如果这个值是函数

例子：

```javascript
var message = "some string";
alert(typeof message);  // "string"
alert(typeof(message)); // "string"
alert(typeof 95); 		// "number"
```

> typeof 是一个操作符而不是函数，因此例子中的圆括号尽管可以使用，但不是必需的