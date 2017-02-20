# break和continue语句

break 和continue 语句用于在循环中精确地控制代码的执行

break 语句会立即退出循环，强制继续执行循环后面的语句

continue 语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行

break 和continue 语句都可以与label 语句联合使用：

```javascript
var num = 0;
outermost:
for (var i=0; i < 10; i++) {
	for (var j=0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break outermost;
		}
		num++;
	}
}
alert(num); //55
```

> 添加outermost标签的结果将导致break 语句不仅会退出内部的for 语句（即使用变量j 的循环），而且也会退出外部的for 语句（即使用变量i 的循环）

```javascript
var num = 0;
outermost:
for (var i=0; i < 10; i++) {
	for (var j=0; j < 10; j++) {
		if (i == 5 && j == 5) {
			continue outermost;
		}
		num++;
	}
}
alert(num); //95
```

> 在这种情况下，continue 语句会强制继续执行循环——退出内部循环，执行外部循环