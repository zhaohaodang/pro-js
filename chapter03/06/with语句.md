# with语句

with 语句的作用是将代码的作用域设置到一个特定的对象中

```javascript
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
```

上面几行代码都包含location 对象。如果使用with 语句：

```javascript
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
```

with 语句关联了location 对象，在with 语句的代码块内部，每个变量首先被认为是一个局部变量，如果在局部环境中找不到该变量的定义，就会查询location 对象中是否有同名的属性

**严格模式下不允许使用with 语句，否则将视为语法错误**

由于大量使用with 语句会导致性能下降，同时也会给调试代码造成困难，因此在开发大型应用程序时，**不建议使用with 语句**