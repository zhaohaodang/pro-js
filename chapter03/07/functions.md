# 函数

函数的基本语法：

```javascript
function functionName(arg0, arg1,...,argN) {
	statements
}
```

推荐要么让函数始终都返回一个值，要么永远都不要返回值。否则，如果函数有时候返回值，有时候有不返回值，会给调试代码带来不便。

严格模式对函数有一些限制：

* 不能把函数命名为eval 或arguments
* 不能把参数命名为eval 或arguments
* 不能出现两个命名参数同名的情况