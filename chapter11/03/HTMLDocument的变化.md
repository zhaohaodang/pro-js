# 11.3.3 HTMLDocument的变化

HTML5扩展了document一些属性：
1. readyState 属性，它有两种情况，一种是`loading`，另一种是`complete`
2. compatMode 属性，告诉开发者当前浏览器采用了哪种渲染模式。"CSS1Compat"-标准模式，"BackCompat"-兼容模式。
3. head 属性，返回<head>元素的引用。