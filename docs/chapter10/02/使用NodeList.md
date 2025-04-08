# 10.2.4 使用NodeList

NodeList是动态的，每当文档变更时，NodeList总是保持最新状态。从性能方面来讲，应该尽量少访问NodeList，因为每次访问NodeList，都会运行一次基于文档的查询。
