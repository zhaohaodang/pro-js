# Null类型

Null 类型是第二个只有一个值的数据类型，这个特殊的值是null。

从逻辑角度来看，**null 值表示一个空对象指针**，而这也正是使用typeof 操作符检测null 值时会返回"object"的原因

undefined 值是派生自null 值的，所以：

```javascript
alert(null == undefined); //true
```

