# Object 类型

创建Object 实例的方式有两种：

* 使用new 操作符后跟Object 构造函数

  ```javascript
  var person = new Object();
  person.name = "Nicholas";
  person.age = 29;
  ```

  ​

* 使用对象字面量表示法

  ```javascript
  var person = {
  	name : "Nicholas",
  	age : 29
  };
  ```

  > 在最后一个属性后面添加逗号，会在IE7 及更早版本和Opera 中导致错误。