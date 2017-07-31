# script元素

属性：

- **async**：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或
  等待加载其他脚本。**只对外部脚本文件有效**。
- **charset**：可选。表示通过src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值，
  因此这个属性很少有人用。
- **defer**：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。**只对外部脚本文件有**
  **效**。IE7 及更早版本对嵌入脚本也支持这个属性。
- **language**：已废弃。原来用于表示编写代码使用的脚本语言（如JavaScript、JavaScript1.2
  或VBScript）。大多数浏览器会忽略这个属性，因此也没有必要再用了。
- **src**：可选。表示包含要执行代码的外部文件。
- **type**：可选。可以看成是language 的替代属性；表示编写代码使用的脚本语言的内容类型（也
  称为MIME 类型）。


在使用 `<script> `嵌入 JavaScript 代码时，记住不要在代码中的任何地方出现 `</script>` 字符串。
例如，浏览器在加载下面所示的代码时就会产生一个错误：

```html
<script type="text/javascript">
    function sayScript(){
    	alert("</script>");
    }
</script>
```

因为按照解析嵌入式代码的规则，当浏览器遇到字符串 "</script>" 时，就会认为那是结束的</script> 标签。而通过转义字符“/”可以解决这个问题

```html
<script type="text/javascript">
    function sayScript(){
    	alert("<\/script>");
    }
</script>
```

