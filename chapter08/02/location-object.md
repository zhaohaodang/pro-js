# location 对象

location 是最有用的 BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。

location 对象是很特别的一个对象，因为它既是 window 对象的属性，也是document 对象的属性；换句话说， window.location 和 document.location 引用的是同一个对象。

下表列出了 location 对象的所有属性（注：省略了每个属性前面的 location 前缀）。

| 属 性 名    | 例 子                  | 说 明                                      |
| -------- | -------------------- | ---------------------------------------- |
| hash     | "#contents"          | 返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串 |
| host     | "www.wrox.com:80"    | 返回服务器名称和端口号（如果有）                         |
| hostname | "www.wrox.com"       | 返回不带端口号的服务器名称                            |
| href     | "http:/www.wrox.com" | 返回当前加载页面的完整URL。而location对象的toString()方法也返回这个值 |
| pathname | "/WileyCDA/"         | 返回URL中的目录和（或）文件名                         |
| port     | "8080"               | 返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串    |
| protocol | "http:"              | 返回页面使用的协议。通常是http:或https:                |
| search   | "?q=javascript"      | 返回URL的查询字符串。这个字符串以问号开头                   |

