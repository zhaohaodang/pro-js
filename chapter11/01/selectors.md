# 11.1 选择符API

* 选择符 API Level 1 的核心是两个方法： querySelector()和 querySelectorAll()。
* querySelector()方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素，如果没有找到匹配的元素，返回 null。如果传入了不被支持的选择符， querySelector()会抛出错误。