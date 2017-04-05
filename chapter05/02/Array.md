# Array 类型

除了Object 之外，Array 类型恐怕是ECMAScript 中最常用的类型了。而且，ECMAScript 中的数组与其他多数语言中的数组有着相当大的区别。ECMAScript 数组的每一项可以保存任何类型的数据。

```javascript
var colors = ["red", "blue", "green"]; // 定义一个字符串数组
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 新增第四项
```

```javascript
var colors = new Array(3); // 创建一个包含3 项的数组
var names = new Array("Greg"); // 创建一个包含1 项，即字符串"Greg"的数组
```

由于数组最后一项的索引始终是length-1，因此下一个新项的位置就是length。每当在数组末尾添加一项后，其length 属性都会自动更新以反应这一变化。

数组最多可以包含4 294 967 295 个项，这几乎已经能够满足任何编程需求了。如果想添加的项数超过这个上限值，就会发生异常。而创建一个初始大小与这个上限值接近的数组，则可能会导致运行时间超长的脚本错误。