# 6.1 理解对象

### 构造函数创建对象

```javascript
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function(){
    alert(this.name);
};
```

先创建一个Object 的实例person，然后再为它添加属性和方法。几年后，**对象字面量**成为创建这种对象的首选模式：

```javascript
var person = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	sayName: function(){
		alert(this.name);
	}
};
```



