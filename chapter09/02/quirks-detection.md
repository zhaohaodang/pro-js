# 怪癖检测

与能力检测类似，**怪癖检测**（quirks detection）的目标是识别浏览器的特殊行为。但与能力检测确认浏览器支持什么能力不同，怪癖检测是想要知道浏览器存在什么缺陷（“怪癖”也就是 bug）。

例如，IE8 及更早版本中存在一个 bug，即如果某个实例属性与 [[Enumerable]] 标记为 false 的某个原型属性同名，那么该实例属性将不会出现在fon-in 循环当中。可以使用如下代码来检测这种“怪癖”。

```javascript
var hasDontEnumQuirk = function(){
  var o = { toString : function(){} };
  for (var prop in o){
      if (prop == "toString"){
          return false;
      }
  }
  return true;
}();
```

一般来说，“怪癖”都是个别浏览器所独有的，而且通常被归为 bug。在相关浏览器的新版本中，这些问题可能会也可能不会被修复。