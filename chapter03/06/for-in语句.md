# for-in语句

for-in 语句是一种精准的迭代语句，可以用来枚举**对象的属性**

```javascript
for (property in expression){
  statement
} 
```

示例

```javascript
for (var propName in window) {
	document.write(propName);
}
```

> 使用for-in 循环来显示了BOM 中window 对象的所有属性。每次执行循环时，都会将window 对象中存在的一个属性名赋值给变量propName

如果表示要迭代的对象的变量值为null 或undefined，for-in 语句会抛出错误

ECMAScript 5 更正了这一行为，对这种情况不再抛出错误，而只是不执行循环体

建议在使用for-in 循环之前，先检测确认该对象的值不是null 或undefined