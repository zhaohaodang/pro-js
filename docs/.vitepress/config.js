import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Javascript高级程序设计",
  description: "",
  lang: "zh-CN",
   base: '/pro-js/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/apple-touch-icon.png",
    sidebar: [
      {
        text: "第1章 JavaScript 简介",
        link: "/chapter01/brief",
        items: [
          { text: "1.1 JavaScript简史", link: "/chapter01/01/history" },
          {
            text: "1.2 JavaScript实现",
            items: [
              { text: "1.2.1 ECMAScript", link: "/chapter01/02/ECMAScript" },
              {
                text: "1.2.2 文档对象模型（DOM）",
                link: "/chapter01/02/文档对象模型",
              },
              {
                text: "1.2.3 浏览器对象模型（BOM）",
                link: "/chapter01/02/浏览器对象模型",
              },
            ],
          },
          { text: "1.3 JavaScript 版本", link: "/chapter01/03/version" },
        ],
      },
      {
        text: "第2章 在HTML 中使用JavaScript",
        link: "/chapter02/HowToUse",
        items: [
          {
            text: "2.1 script元素",
            items: [
              { text: "2.1.1 标签的位置", link: "/chapter02/01/标签的位置" },
              { text: "2.1.2 延迟脚本", link: "/chapter02/01/延迟脚本" },
              { text: "2.1.3 异步脚本", link: "/chapter02/01/异步脚本" },
              {
                text: "2.1.4 在XHTML中的用法",
                link: "/chapter02/01/在XHTML中的用法",
              },
              {
                text: "2.1.5 不推荐使用的语法",
                link: "/chapter02/01/不推荐使用的语法",
              },
            ],
          },
          { text: "2.2 嵌入代码与外部文件", link: "/chapter02/02/code-file" },
          { text: "2.3 文档模式", link: "/chapter02/03/document-modes" },
          { text: "2.4 noscript元素", link: "/chapter02/04/noscript-ele" },
        ],
      },
      {
        text: "第3章 基本概念",
        link: "/chapter03/basics",
        items: [
          {
            text: "3.1 语法",
            items: [
              { text: "3.1.1 区分大小写", link: "/chapter03/01/区分大小写" },
              { text: "3.1.2 标识符", link: "/chapter03/01/标识符" },
              { text: "3.1.3 注释", link: "/chapter03/01/注释" },
              { text: "3.1.4 严格模式", link: "/chapter03/01/严格模式" },
              { text: "3.1.5 语句", link: "/chapter03/01/语句" },
            ],
          },
          {
            text: "3.2 关键字和保留字",
            link: "/chapter03/02/keywords-reserved-words",
          },
          { text: "3.3 变量", link: "/chapter03/03/variables" },
          {
            text: "3.4 数据类型",
            items: [
              {
                text: "3.4.1 typeof操作符",
                link: "/chapter03/04/typeof操作符",
              },
              {
                text: "3.4.2 Undefined类型",
                link: "/chapter03/04/Undefined类型",
              },
              { text: "3.4.3 Null类型", link: "/chapter03/04/Null类型" },
              { text: "3.4.4 Boolean类型", link: "/chapter03/04/Boolean类型" },
              { text: "3.4.5 Number类型", link: "/chapter03/04/Number类型" },
              { text: "3.4.6 String类型", link: "/chapter03/04/String类型" },
              { text: "3.4.7 Object类型", link: "/chapter03/04/Object类型" },
            ],
          },
          {
            text: "3.5 操作符",
            items: [
              { text: "3.5.1 一元操作符", link: "/chapter03/05/一元操作符" },
              { text: "3.5.2 位操作符", link: "/chapter03/05/位操作符" },
              { text: "3.5.3 布尔操作符", link: "/chapter03/05/布尔操作符" },
              { text: "3.5.4 乘性操作符", link: "/chapter03/05/乘性操作符" },
              { text: "3.5.5 加性操作符", link: "/chapter03/05/加性操作符" },
              { text: "3.5.6 关系操作符", link: "/chapter03/05/关系操作符" },
              { text: "3.5.7 相等操作符", link: "/chapter03/05/相等操作符" },
              { text: "3.5.8 条件操作符", link: "/chapter03/05/条件操作符" },
              { text: "3.5.9 赋值操作符", link: "/chapter03/05/赋值操作符" },
              { text: "3.5.10 逗号操作符", link: "/chapter03/05/逗号操作符" },
            ],
          },
          {
            text: "3.6 语句",
            items: [
              { text: "3.6.1 if语句", link: "/chapter03/06/if语句" },
              {
                text: "3.6.2 do-while语句",
                link: "/chapter03/06/do-while语句",
              },
              { text: "3.6.3 while语句", link: "/chapter03/06/while语句" },
              { text: "3.6.4 for语句", link: "/chapter03/06/for语句" },
              { text: "3.6.5 for-in语句", link: "/chapter03/06/for-in语句" },
              { text: "3.6.6 label语句", link: "/chapter03/06/label语句" },
              {
                text: "3.6.7 break和continue语句",
                link: "/chapter03/06/break和continue语句",
              },
              { text: "3.6.8 with语句", link: "/chapter03/06/with语句" },
              { text: "3.6.9 switch语句", link: "/chapter03/06/switch语句" },
            ],
          },
          {
            text: "3.7 函数",
            items: [
              { text: "3.7.1 理解参数", link: "/chapter03/07/理解参数" },
              { text: "3.7.2 没有重载", link: "/chapter03/07/没有重载" },
            ],
          },
        ],
      },
      {
        text: "第4章 变量、作用域和内存问题",
        link: "/chapter04/variables-scope-memory",
        items: [
          {
            text: "4.1 基本类型和引用类型的值",
            items: [
              { text: "4.1.1 动态的属性", link: "/chapter04/01/动态的属性" },
              { text: "4.1.2 复制变量值", link: "/chapter04/01/复制变量值" },
              { text: "4.1.3 传递参数", link: "/chapter04/01/传递参数" },
              { text: "4.1.4 检测类型", link: "/chapter04/01/检测类型" },
            ],
          },
          {
            text: "4.2 执行环境及作用域",
            items: [
              {
                text: "4.2.1 延长作用域链",
                link: "/chapter04/02/延长作用域链",
              },
              {
                text: "4.2.2 没有块级作用域",
                link: "/chapter04/02/没有块级作用域",
              },
            ],
          },
          {
            text: "4.3 垃圾收集",
            items: [
              { text: "4.3.1 标记清除", link: "/chapter04/03/标记清除" },
              { text: "4.3.2 引用计数", link: "/chapter04/03/引用计数" },
              { text: "4.3.3 性能问题", link: "/chapter04/03/性能问题" },
              { text: "4.3.4 管理内存", link: "/chapter04/03/管理内存" },
            ],
          },
        ],
      },
      {
        text: "第5章 引用类型",
        link: "/chapter05/referenc-types",
        items: [
          { text: "5.1 Object 类型", link: "/chapter05/01/Object" },
          {
            text: "5.2 Array 类型",
            items: [
              { text: "5.2.1 检测数组", link: "/chapter05/02/检测数组" },
              { text: "5.2.2 转换方法", link: "/chapter05/02/转换方法" },
              { text: "5.2.3 栈方法", link: "/chapter05/02/栈方法" },
              { text: "5.2.4 队列方法", link: "/chapter05/02/队列方法" },
              { text: "5.2.5 重排序方法", link: "/chapter05/02/重排序方法" },
              { text: "5.2.6 操作方法", link: "/chapter05/02/操作方法" },
              { text: "5.2.7 位置方法", link: "/chapter05/02/位置方法" },
              { text: "5.2.8 迭代方法", link: "/chapter05/02/迭代方法" },
              { text: "5.2.9 归并方法", link: "/chapter05/02/归并方法" },
            ],
          },
          {
            text: "5.3 Date 类型",
            items: [
              { text: "5.3.1 继承的方法", link: "/chapter05/03/继承的方法" },
              {
                text: "5.3.2 日期格式化方法",
                link: "/chapter05/03/日期格式化方法",
              },
              {
                text: "5.3.3 日期/时间组件方法",
                link: "/chapter05/03/日期-时间组件方法",
              },
            ],
          },
          {
            text: "5.4 RegExp 类型",
            items: [
              {
                text: "5.4.1 RegExp实例属性",
                link: "/chapter05/04/RegExp实例属性",
              },
              {
                text: "5.4.2 RegExp实例方法",
                link: "/chapter05/04/RegExp实例方法",
              },
              {
                text: "5.4.3 RegExp构造函数属性",
                link: "/chapter05/04/RegExp构造函数属性",
              },
              {
                text: "5.4.4 模式的局限性",
                link: "/chapter05/04/模式的局限性",
              },
            ],
          },
          {
            text: "5.5 Function 类型",
            items: [
              {
                text: "5.5.1 没有重载（深入理解）",
                link: "/chapter05/05/没有重载（深入理解）",
              },
              {
                text: "5.5.2 函数声明与函数表达式",
                link: "/chapter05/05/函数声明与函数表达式",
              },
              {
                text: "5.5.3 作为值的函数",
                link: "/chapter05/05/作为值的函数",
              },
              {
                text: "5.5.4 函数内部属性",
                link: "/chapter05/05/函数内部属性",
              },
              {
                text: "5.5.5 函数属性和方法",
                link: "/chapter05/05/函数属性和方法",
              },
            ],
          },
          {
            text: "5.6 基本包装类型",
            items: [
              {
                text: "5.6.1 函数属性和方法",
                link: "/chapter05/06/Boolean类型",
              },
              { text: "5.6.2 Number类型", link: "/chapter05/06/Number类型" },
              { text: "5.6.3 String类型", link: "/chapter05/06/String类型" },
            ],
          },
          {
            text: "5.7 单体内置对象",
            items: [
              { text: "5.7.1 Global对象", link: "/chapter05/07/Global对象" },
              { text: "5.7.2 Math对象", link: "/chapter05/07/Math对象" },
            ],
          },
        ],
      },
      {
        text: "第6章 面向对象的程序设计",
        link: "/chapter06/object-oriented",
        items: [
          {
            text: "6.1 理解对象",
            items: [
              { text: "6.1.1 属性类型", link: "/chapter06/01/属性类型" },
              {
                text: "6.1.2 定义多个属性",
                link: "/chapter06/01/定义多个属性",
              },
              {
                text: "6.1.3 读取属性的特性",
                link: "/chapter06/01/读取属性的特性",
              },
            ],
          },
          {
            text: "6.2 创建对象",
            items: [
              { text: "6.2.1 工厂模式", link: "/chapter06/02/工厂模式" },
              {
                text: "6.2.2 构造函数模式",
                link: "/chapter06/02/构造函数模式",
              },
              { text: "6.2.3 原型模式", link: "/chapter06/02/原型模式" },
              {
                text: "6.2.4 组合使用构造函数模式和原型模式",
                link: "/chapter06/02/组合使用构造函数模式和原型模式",
              },
              {
                text: "6.2.5 动态原型模式",
                link: "/chapter06/02/动态原型模式",
              },
              {
                text: "6.2.6 寄生构造函数模式",
                link: "/chapter06/02/寄生构造函数模式",
              },
              {
                text: "6.2.7 稳妥构造函数模式",
                link: "/chapter06/02/稳妥构造函数模式",
              },
            ],
          },
          {
            text: "6.3 继承",
            items: [
              { text: "6.3.1 原型链", link: "/chapter06/03/原型链" },
              {
                text: "6.3.2 借用构造函数",
                link: "/chapter06/03/借用构造函数",
              },
              { text: "6.3.3 组合继承", link: "/chapter06/03/组合继承" },
              { text: "6.3.4 原型式继承", link: "/chapter06/03/原型式继承" },
              { text: "6.3.5 寄生式继承", link: "/chapter06/03/寄生式继承" },
              {
                text: "6.3.6 寄生组合式继承",
                link: "/chapter06/03/寄生组合式继承",
              },
            ],
          },
        ],
      },
      {
        text: "第7章 函数表达式",
        link: "/chapter07/function-expressions",
        items: [
          { text: "7.1 递归", link: "/chapter07/01/recursive" },
          {
            text: "7.2 闭包",
            items: [
              { text: "7.2.1 闭包与变量", link: "/chapter07/02/闭包与变量" },
              {
                text: "7.2.2 关于this对象",
                link: "/chapter07/02/关于this对象",
              },
              { text: "7.2.3 内存泄漏", link: "/chapter07/02/内存泄漏" },
            ],
          },
          {
            text: "7.3 模仿块级作用域",
            link: "/chapter07/03/mimicking-block-scope",
          },
          {
            text: "7.4 私有变量",
            items: [
              {
                text: "7.4.1 静态私有变量",
                link: "/chapter07/04/静态私有变量",
              },
              { text: "7.4.2 模块模式", link: "/chapter07/04/模块模式" },
              {
                text: "7.4.3 增强的模块模式",
                link: "/chapter07/04/增强的模块模式",
              },
            ],
          },
        ],
      },
      {
        text: "第8章 BOM",
        link: "/chapter08/BOM-detail",
        items: [
          {
            text: "8.1 window 对象",
            items: [
              { text: "8.1.1 全局作用域", link: "/chapter08/01/全局作用域" },
              {
                text: "8.1.2 窗口关系及框架",
                link: "/chapter08/01/窗口关系及框架",
              },
              { text: "8.1.3 窗口位置", link: "/chapter08/01/窗口位置" },
              { text: "8.1.4 窗口大小", link: "/chapter08/01/窗口大小" },
              {
                text: "8.1.5 导航和打开窗口",
                link: "/chapter08/01/导航和打开窗口",
              },
              {
                text: "8.1.6 间歇调用和超时调用",
                link: "/chapter08/01/间歇调用和超时调用",
              },
              { text: "8.1.7 系统对话框", link: "/chapter08/01/系统对话框" },
            ],
          },
          {
            text: "8.2 location 对象",
            items: [
              {
                text: "8.2.1 查询字符串参数",
                link: "/chapter08/02/查询字符串参数",
              },
              { text: "8.2.2 位置操作", link: "/chapter08/02/位置操作" },
            ],
          },
          {
            text: "8.3 navigator 对象",
            items: [
              { text: "8.3.1 检测插件", link: "/chapter08/03/检测插件" },
              {
                text: "8.3.2 注册处理程序",
                link: "/chapter08/03/注册处理程序",
              },
            ],
          },
          { text: "8.4 screen 对象", link: "/chapter08/04/screen-object" },
          { text: "8.5 history 对象", link: "/chapter08/05/history-object" },
        ],
      },
      {
        text: "第9章 客户端检测",
        link: "/chapter09/client-detection",
        items: [
          {
            text: "9.1 能力检测",
            items: [
              {
                text: "9.1.1 更可靠的能力检测",
                link: "/chapter09/01/更可靠的能力检测",
              },
              {
                text: "9.1.2 能力检测，不是浏览器检测",
                link: "/chapter09/01/能力检测",
              },
            ],
          },
          { text: "9.2 怪癖检测", link: "/chapter09/02/quirks-detection" },
          {
            text: "9.3 用户代理检测",
            items: [
              {
                text: "9.3.1 用户代理字符串的历史",
                link: "/chapter09/03/用户代理字符串的历史",
              },
              {
                text: "9.3.2 用户代理字符串检测技术",
                link: "/chapter09/03/用户代理字符串检测技术",
              },
              { text: "9.3.3 完整的代码", link: "/chapter09/03/完整的代码" },
              { text: "9.3.4 使用方法", link: "/chapter09/03/使用方法" },
            ],
          },
        ],
      },
      {
        text: "第10章 DOM",
        link: "/chapter10/DOM-detail",
        items: [
          {
            text: "10.1 节点层次",
            items: [
              { text: "10.1.1 Node类型", link: "/chapter10/01/Node类型" },
              {
                text: "10.1.2 Document类型",
                link: "/chapter10/01/Document类型",
              },
              { text: "10.1.3 Element类型", link: "/chapter10/01/Element类型" },
              { text: "10.1.4 Text类型", link: "/chapter10/01/Text类型" },
              { text: "10.1.5 Comment类型", link: "/chapter10/01/Comment类型" },
              {
                text: "10.1.6 CDATASection类型",
                link: "/chapter10/01/CDATASection类型",
              },
              {
                text: "10.1.7 DocumentType类型",
                link: "/chapter10/01/DocumentType类型",
              },
              {
                text: "10.1.8 DocumentFragment类型",
                link: "/chapter10/01/DocumentFragment类型",
              },
              { text: "10.1.9 Attr类型", link: "/chapter10/01/Attr类型" },
            ],
          },
          {
            text: "10.2 DOM 操作技术",
            items: [
              { text: "10.2.1 动态脚本", link: "/chapter10/02/动态脚本" },
              { text: "10.2.2 动态样式", link: "/chapter10/02/动态样式" },
              { text: "10.2.3 操作表格", link: "/chapter10/02/操作表格" },
              {
                text: "10.2.4 使用NodeList",
                link: "/chapter10/02/使用NodeList",
              },
            ],
          },
        ],
      },
      {
        text: "第11章 DOM 扩展",
        link: "/chapter11/DOM-extensions",
        items: [
          {
            text: "11.1 选择符API",
            items: [
              {
                text: "11.1.1 querySelector()方法",
                link: "/chapter11/01/querySelector",
              },
              {
                text: "11.1.2 querySelectorAll()方法",
                link: "/chapter11/01/querySelectorAll",
              },
              {
                text: "11.1.3 matchesSelector()方法",
                link: "/chapter11/01/matchesSelector",
              },
            ],
          },
          { text: "11.2 元素遍历", link: "/chapter11/02/traversal" },
          {
            text: "11.3 HTML5",
            items: [
              {
                text: "11.3.1 与类相关的扩充",
                link: "/chapter11/03/与类相关的扩充",
              },
              { text: "11.3.2 焦点管理", link: "/chapter11/03/焦点管理" },
              {
                text: "11.3.3 HTMLDocument的变化",
                link: "/chapter11/03/HTMLDocument的变化",
              },
              { text: "11.3.4 字符集属性", link: "/chapter11/03/字符集属性" },
              {
                text: "11.3.5 自定义数据属性",
                link: "/chapter11/03/自定义数据属性",
              },
              { text: "11.3.6 插入标记", link: "/chapter11/03/插入标记" },
              {
                text: "11.3.7 scrollIntoView()方法",
                link: "/chapter11/03/scrollIntoView",
              },
            ],
          },
          {
            text: "11.4 专有扩展",
            items: [
              { text: "11.4.1 文档模式", link: "/chapter11/04/文档模式" },
              {
                text: "11.4.2 children属性",
                link: "/chapter11/04/children属性",
              },
              { text: "11.4.3 contains()方法", link: "/chapter11/04/contains" },
              { text: "11.4.4 插入文本", link: "/chapter11/04/插入文本" },
              { text: "11.4.5 滚动", link: "/chapter11/04/滚动" },
            ],
          },
        ],
      },
      {
        text: "第12章 DOM2 和DOM3",
        link: "/chapter12/DOM2-DOM3",
        items: [
          {
            text: "12.1 DOM 变化",
            items: [
              {
                text: "12.1.1 针对XML命名空间的变化",
                link: "/chapter12/01/针对XML命名空间的变化",
              },
              {
                text: "12.1.2 其他方面的变化",
                link: "/chapter12/01/其他方面的变化",
              },
            ],
          },
          {
            text: "12.2 样式",
            items: [
              {
                text: "12.2.1 访问元素的样式",
                link: "/chapter12/02/访问元素的样式",
              },
              { text: "12.2.2 操作样式表", link: "/chapter12/02/操作样式表" },
              { text: "12.2.3 元素大小", link: "/chapter12/02/元素大小" },
            ],
          },
          {
            text: "12.3 遍历",
            items: [
              {
                text: "12.3.1 NodeIterator",
                link: "/chapter12/03/NodeIterator",
              },
              { text: "12.3.2 TreeWalker", link: "/chapter12/03/TreeWalker" },
            ],
          },
          {
            text: "12.4 范围",
            items: [
              { text: "12.4.1 DOM中的范围", link: "/chapter12/04/DOM中的范围" },
              {
                text: "12.4.2 IE8 及更早版本中的范围",
                link: "/chapter12/04/IE8 及更早版本中的范围",
              },
            ],
          },
        ],
      },
      {
        text: "第13章 事件",
        link: "/chapter13/events",
        items: [
          {
            text: "13.1 事件流",
            items: [
              { text: "13.1.1 事件冒泡", link: "/chapter13/01/事件冒泡" },
              { text: "13.1.2 事件捕获", link: "/chapter13/01/事件捕获" },
              { text: "13.1.3 DOM事件流", link: "/chapter13/01/DOM事件流" },
            ],
          },
          {
            text: "13.2 事件处理程序",
            items: [
              {
                text: "13.2.1 HTML事件处理程序",
                link: "/chapter13/02/HTML事件处理程序",
              },
              {
                text: "13.2.2 DOM0 级事件处理程序",
                link: "/chapter13/02/DOM0 级事件处理程序",
              },
              {
                text: "13.2.3 DOM2 级事件处理程序",
                link: "/chapter13/02/DOM2 级事件处理程序",
              },
              {
                text: "13.2.4 IE事件处理程序",
                link: "/chapter13/02/IE事件处理程序",
              },
              {
                text: "13.2.5 跨浏览器的事件处理程序",
                link: "/chapter13/02/跨浏览器的事件处理程序",
              },
            ],
          },
          {
            text: "13.3 事件对象",
            items: [
              {
                text: "13.3.1 DOM中的事件对象",
                link: "/chapter13/03/DOM中的事件对象",
              },
              {
                text: "13.3.2 IE中的事件对象",
                link: "/chapter13/03/IE中的事件对象",
              },
              {
                text: "13.3.3 跨浏览器的事件对象",
                link: "/chapter13/03/跨浏览器的事件对象",
              },
            ],
          },
          {
            text: "13.4 事件类型",
            items: [
              { text: "13.4.1 UI事件", link: "/chapter13/04/UI事件" },
              { text: "13.4.2 焦点事件", link: "/chapter13/04/焦点事件" },
              {
                text: "13.4.3 鼠标与滚轮事件",
                link: "/chapter13/04/鼠标与滚轮事件",
              },
              {
                text: "13.4.4 键盘与文本事件",
                link: "/chapter13/04/键盘与文本事件",
              },
              { text: "13.4.5 复合事件", link: "/chapter13/04/复合事件" },
              { text: "13.4.6 变动事件", link: "/chapter13/04/变动事件" },
              { text: "13.4.7 HTML5 事件", link: "/chapter13/04/HTML5" },
              { text: "13.4.8 设备事件", link: "/chapter13/04/设备事件" },
              {
                text: "13.4.9 触摸与手势事件",
                link: "/chapter13/04/触摸与手势事件",
              },
            ],
          },
          {
            text: "13.5 内存和性能",
            items: [
              { text: "13.5.1 事件委托", link: "/chapter13/05/事件委托" },
              {
                text: "13.5.2 移除事件处理程序",
                link: "/chapter13/05/移除事件处理程序",
              },
            ],
          },
          {
            text: "13.6 模拟事件",
            items: [
              {
                text: "13.6.1 DOM中的事件模拟",
                link: "/chapter13/06/DOM中的事件模拟",
              },
              {
                text: "13.6.2 IE中的事件模拟",
                link: "/chapter13/06/IE中的事件模拟",
              },
            ],
          },
        ],
      },
      {
        text: "第14章 表单脚本",
        link: "/chapter14/scripting-forms",
        items: [
          {
            text: "14.1 表单的基础知识",
            items: [
              { text: "14.1.1 提交表单", link: "/chapter14/01/提交表单" },
              { text: "14.1.2 重置表单", link: "/chapter14/01/重置表单" },
              { text: "14.1.3 表单字段", link: "/chapter14/01/表单字段" },
            ],
          },
          {
            text: "14.2 文本框脚本",
            items: [
              { text: "14.2.1 选择文本", link: "/chapter14/02/选择文本" },
              { text: "14.2.2 过滤输入", link: "/chapter14/02/过滤输入" },
              {
                text: "14.2.3 自动切换焦点",
                link: "/chapter14/02/自动切换焦点",
              },
              {
                text: "14.2.4 HTML5 约束验证API",
                link: "/chapter14/02/HTML5 约束验证API",
              },
            ],
          },
          {
            text: "14.3 选择框脚本",
            items: [
              { text: "14.3.1 选择选项", link: "/chapter14/03/选择选项" },
              { text: "14.3.2 添加选项", link: "/chapter14/03/添加选项" },
              { text: "14.3.3 移除选项", link: "/chapter14/03/移除选项" },
              {
                text: "14.3.4 移动和重排选项",
                link: "/chapter14/03/移动和重排选项",
              },
            ],
          },
          { text: "14.4 表单序列化", link: "/chapter14/04/form-serialization" },
          {
            text: "14.5 富文本编辑",
            items: [
              {
                text: "14.5.1 使用contenteditable属性",
                link: "/chapter14/05/使用contenteditable属性",
              },
              { text: "14.5.2 操作富文本", link: "/chapter14/05/操作富文本" },
              { text: "14.5.3 富文本选区", link: "/chapter14/05/富文本选区" },
              {
                text: "14.5.4 表单与富文本",
                link: "/chapter14/05/表单与富文本",
              },
            ],
          },
        ],
      },
      {
        text: "第15章 使用Canvas 绘图",
        link: "/chapter15/canvas",
        items: [
          { text: "15.1 基本用法", link: "/chapter15/01/basic-usage" },
          {
            text: "15.2 2D 上下文",
            items: [
              { text: "15.2.1 填充和描边", link: "/chapter15/02/填充和描边" },
              { text: "15.2.2 绘制矩形", link: "/chapter15/02/绘制矩形" },
              { text: "15.2.3 绘制路径", link: "/chapter15/02/绘制路径" },
              { text: "15.2.4 绘制文本", link: "/chapter15/02/绘制文本" },
              { text: "15.2.5 变换", link: "/chapter15/02/变换" },
              { text: "15.2.6 绘制图像", link: "/chapter15/02/绘制图像" },
              { text: "15.2.7 阴影", link: "/chapter15/02/阴影" },
              { text: "15.2.8 渐变", link: "/chapter15/02/渐变" },
              { text: "15.2.9 模式", link: "/chapter15/02/模式" },
              {
                text: "15.2.10 使用图像数据",
                link: "/chapter15/02/使用图像数据",
              },
              { text: "15.2.11 合成", link: "/chapter15/02/合成" },
            ],
          },
          {
            text: "15.3 WebGL",
            items: [
              { text: "15.3.1 类型化数组", link: "/chapter15/03/类型化数组" },
              { text: "15.3.2 WebGL上下文", link: "/chapter15/03/WebGL上下文" },
              { text: "15.3.3 支持", link: "/chapter15/03/支持" },
            ],
          },
        ],
      },
      {
        text: "第16章 HTML5 脚本编程",
        link: "/chapter16/HTML5-scripting",
        items: [
          { text: "16.1 跨文档消息传递", link: "/chapter16/01/messaging" },
          {
            text: "16.2 原生拖放",
            items: [
              { text: "16.2.1 拖放事件", link: "/chapter16/02/拖放事件" },
              {
                text: "16.2.2 自定义放置目标",
                link: "/chapter16/02/自定义放置目标",
              },
              {
                text: "16.2.3 dataTransfer对象",
                link: "/chapter16/02/dataTransfer对象",
              },
              {
                text: "16.2.4 dropEffect与effectAllowed",
                link: "/chapter16/02/dropEffect与effectAllowed",
              },
              { text: "16.2.5 可拖动", link: "/chapter16/02/可拖动" },
              { text: "16.2.6 其他成员", link: "/chapter16/02/其他成员" },
            ],
          },
          {
            text: "16.3 媒体元素",
            items: [
              { text: "16.3.1 属性", link: "/chapter16/03/属性" },
              { text: "16.3.2 事件", link: "/chapter16/03/事件" },
              {
                text: "16.3.3 自定义媒体播放器",
                link: "/chapter16/03/自定义媒体播放器",
              },
              {
                text: "16.3.4 检测编解码器的支持情况",
                link: "/chapter16/03/检测编解码器的支持情况",
              },
              { text: "16.3.5 Audio类型", link: "/chapter16/03/Audio类型" },
            ],
          },
          {
            text: "16.4 历史状态管理",
            link: "/chapter16/04/history-state-management",
          },
        ],
      },
      {
        text: "第17章 错误处理与调试",
        link: "/chapter17/error-handling-debugging",
        items: [
          {
            text: "17.1 浏览器报告的错误",
            items: [
              { text: "17.1.1 IE", link: "/chapter17/01/IE" },
              { text: "17.1.2 Firefox", link: "/chapter17/01/Firefox" },
              { text: "17.1.3 Safari", link: "/chapter17/01/Safari" },
              { text: "17.1.4 Opera", link: "/chapter17/01/Opera" },
              { text: "17.1.5 Chrome", link: "/chapter17/01/Chrome" },
            ],
          },
          {
            text: "17.2 错误处理",
            items: [
              {
                text: "17.2.1 try-catch语句",
                link: "/chapter17/02/try-catch语句",
              },
              { text: "17.2.2 抛出错误", link: "/chapter17/02/抛出错误" },
              {
                text: "17.2.3 错误（error）事件",
                link: "/chapter17/02/错误事件",
              },
              {
                text: "17.2.4 处理错误的策略",
                link: "/chapter17/02/处理错误的策略",
              },
              {
                text: "17.2.5 常见的错误类型",
                link: "/chapter17/02/常见的错误类型",
              },
              {
                text: "17.2.6 区分致命错误和非致命错误",
                link: "/chapter17/02/区分致命错误和非致命错误",
              },
              {
                text: "17.2.7 把错误记录到服务器",
                link: "/chapter17/02/把错误记录到服务器",
              },
            ],
          },
          {
            text: "17.3 调试技术",
            items: [
              {
                text: "17.3.1 将消息记录到控制台",
                link: "/chapter17/03/将消息记录到控制台",
              },
              {
                text: "17.3.2 将消息记录到当前页面",
                link: "/chapter17/03/将消息记录到当前页面",
              },
              { text: "17.3.3 抛出错误", link: "/chapter17/03/抛出错误" },
            ],
          },
          {
            text: "17.4 常见的IE 错误",
            items: [
              { text: "17.4.1 操作终止", link: "/chapter17/04/操作终止" },
              { text: "17.4.2 无效字符", link: "/chapter17/04/无效字符" },
              { text: "17.4.3 未找到成员", link: "/chapter17/04/未找到成员" },
              {
                text: "17.4.4 未知运行时错误",
                link: "/chapter17/04/未知运行时错误",
              },
              { text: "17.4.5 语法错误", link: "/chapter17/04/语法错误" },
              {
                text: "17.4.6 系统无法找到指定资源",
                link: "/chapter17/04/系统无法找到指定资源",
              },
            ],
          },
        ],
      },
      {
        text: "第18章 JavaScript 与XML",
        link: "/chapter18/XML-in-JavaScript",
        items: [
          {
            text: "18.1 浏览器对XML DOM 的支持",
            items: [
              { text: "18.1.1 DOM2 级核心", link: "/chapter18/01/DOM2 级核心" },
              {
                text: "18.1.2 DOMParser类型",
                link: "/chapter18/01/DOMParser类型",
              },
              {
                text: "18.1.3 XMLSerializer类型",
                link: "/chapter18/01/XMLSerializer类型",
              },
              {
                text: "18.1.4 IE8 及之前版本中的XML",
                link: "/chapter18/01/IE8 及之前版本中的XML",
              },
              {
                text: "18.1.5 跨浏览器处理XML",
                link: "/chapter18/01/跨浏览器处理XML",
              },
            ],
          },
          {
            text: "18.2 浏览器对XPath 的支持",
            items: [
              {
                text: "18.2.1 DOM3 级XPath",
                link: "/chapter18/02/DOM3 级XPath",
              },
              { text: "18.2.2 IE中的XPath", link: "/chapter18/02/IE中的XPath" },
              {
                text: "18.2.3 跨浏览器使用XPath",
                link: "/chapter18/02/跨浏览器使用XPath",
              },
            ],
          },
          {
            text: "18.3 浏览器对XSLT 的支持",
            items: [
              { text: "18.3.1 IE中的XSLT", link: "/chapter18/03/IE中的XSLT" },
              {
                text: "18.3.2 XSLTProcessor类型",
                link: "/chapter18/03/XSLTProcessor类型",
              },
              {
                text: "18.3.3 跨浏览器使用XSLT",
                link: "/chapter18/03/跨浏览器使用XSLT",
              },
            ],
          },
        ],
      },
      {
        text: "第19章 E4X",
        link: "/chapter19/E4X",
        items: [
          {
            text: "19.1 E4X 的类型",
            items: [
              { text: "19.1.1 XML类型", link: "/chapter19/01/XML类型" },
              { text: "19.1.2 XMLList类型", link: "/chapter19/01/XMLList类型" },
              {
                text: "19.1.3 Namespace类型",
                link: "/chapter19/01/Namespace类型",
              },
              { text: "19.1.4 QName类型", link: "/chapter19/01/QName类型" },
            ],
          },
          {
            text: "19.2 一般用法",
            items: [
              { text: "19.2.1 访问特性", link: "/chapter19/02/访问特性" },
              {
                text: "19.2.2 其他节点类型",
                link: "/chapter19/02/其他节点类型",
              },
              { text: "19.2.3 查询", link: "/chapter19/02/查询" },
              {
                text: "19.2.4 构建和操作XML",
                link: "/chapter19/02/构建和操作XML",
              },
              {
                text: "19.2.5 解析和序列化",
                link: "/chapter19/02/解析和序列化",
              },
              { text: "19.2.6 命名空间", link: "/chapter19/02/命名空间" },
            ],
          },
          { text: "19.3 其他变化", link: "/chapter19/03/other-changes" },
          { text: "19.4 全面启用E4X", link: "/chapter19/04/full-E4X" },
        ],
      },
      {
        text: "第20章 JSON",
        link: "/chapter20/json",
        items: [
          {
            text: "20.1 语法",
            items: [
              { text: "20.1.1 简单值", link: "/chapter20/01/简单值" },
              { text: "20.1.2 对象", link: "/chapter20/01/对象" },
              { text: "20.1.3 数组", link: "/chapter20/01/数组" },
            ],
          },
          {
            text: "20.2 解析与序列化",
            items: [
              { text: "20.2.1 JSON对象", link: "/chapter20/02/JSON对象" },
              { text: "20.2.2 序列化选项", link: "/chapter20/02/序列化选项" },
              { text: "20.2.3 解析选项", link: "/chapter20/02/解析选项" },
            ],
          },
        ],
      },
      {
        text: "第21章 Ajax 与Comet",
        link: "/chapter21/ajax-comet",
        items: [
          {
            text: "21.1 XMLHttpRequest 对象",
            items: [
              { text: "21.1.1 XHR的用法", link: "/chapter21/01/XHR的用法" },
              {
                text: "21.1.2 HTTP头部信息",
                link: "/chapter21/01/HTTP头部信息",
              },
              { text: "21.1.3 GET请求", link: "/chapter21/01/GET请求" },
              { text: "21.1.4 POST请求", link: "/chapter21/01/POST请求" },
            ],
          },
          {
            text: "21.2 XMLHttpRequest 2 级",
            items: [
              { text: "21.2.1 FormData", link: "/chapter21/02/FormData" },
              { text: "21.2.2 超时设定", link: "/chapter21/02/超时设定" },
              {
                text: "21.2.3 overrideMimeType()方法",
                link: "/chapter21/02/overrideMimeType",
              },
            ],
          },
          {
            text: "21.3 进度事件",
            items: [
              { text: "21.3.1 load事件", link: "/chapter21/03/load事件" },
              {
                text: "21.3.2 progress事件",
                link: "/chapter21/03/progress事件",
              },
            ],
          },
          {
            text: "21.4 跨源资源共享",
            items: [
              {
                text: "21.4.1 IE对CORS的实现",
                link: "/chapter21/04/IE对CORS的实现",
              },
              {
                text: "21.4.2 其他浏览器对CORS的实现",
                link: "/chapter21/04/其他浏览器对CORS的实现",
              },
              {
                text: "21.4.3 Preflighted Reqeusts",
                link: "/chapter21/04/Preflighted Reqeusts",
              },
              {
                text: "21.4.4 带凭据的请求",
                link: "/chapter21/04/带凭据的请求",
              },
              {
                text: "21.4.5 跨浏览器的CORS",
                link: "/chapter21/04/跨浏览器的CORS",
              },
            ],
          },
          {
            text: "21.5 其他跨域技术",
            items: [
              { text: "21.5.1 图像Ping", link: "/chapter21/05/图像Ping" },
              { text: "21.5.2 JSONP", link: "/chapter21/05/JSONP" },
              { text: "21.5.3 Comet", link: "/chapter21/05/Comet" },
              {
                text: "21.5.4 服务器发送事件",
                link: "/chapter21/05/服务器发送事件",
              },
              { text: "21.5.5 Web Sockets", link: "/chapter21/05/Web Sockets" },
              {
                text: "21.5.6 SSE与Web Sockets",
                link: "/chapter21/05/SSE与Web Sockets",
              },
            ],
          },
          { text: "21.6 安全", link: "/chapter21/06/security" },
        ],
      },
      {
        text: "第22章 高级技巧",
        link: "/chapter22/advanced-techniques",
        items: [
          {
            text: "22.1 高级函数",
            items: [
              {
                text: "22.1.1 安全的类型检测",
                link: "/chapter22/01/安全的类型检测",
              },
              {
                text: "22.1.2 作用域安全的构造函数",
                link: "/chapter22/01/作用域安全的构造函数",
              },
              {
                text: "22.1.3 惰性载入函数",
                link: "/chapter22/01/惰性载入函数",
              },
              { text: "22.1.4 函数绑定", link: "/chapter22/01/函数绑定" },
              { text: "22.1.5 函数柯里化", link: "/chapter22/01/函数柯里化" },
            ],
          },
          {
            text: "22.2 防篡改对象",
            items: [
              {
                text: "22.2.1 不可扩展对象",
                link: "/chapter22/02/不可扩展对象",
              },
              { text: "22.2.2 密封的对象", link: "/chapter22/02/密封的对象" },
              { text: "22.2.3 冻结的对象", link: "/chapter22/02/冻结的对象" },
            ],
          },
          {
            text: "22.3 高级定时器",
            items: [
              {
                text: "22.3.1 重复的定时器",
                link: "/chapter22/03/重复的定时器",
              },
              {
                text: "22.3.2 Yielding Processes",
                link: "/chapter22/03/Yielding Processes",
              },
              { text: "22.3.3 函数节流", link: "/chapter22/03/函数节流" },
            ],
          },
          { text: "22.4 自定义事件", link: "/chapter22/04/custom-event" },
          {
            text: "22.5 拖放",
            items: [
              {
                text: "22.5.1 修缮拖动功能",
                link: "/chapter22/05/修缮拖动功能",
              },
              {
                text: "22.5.2 添加自定义事件",
                link: "/chapter22/05/添加自定义事件",
              },
            ],
          },
        ],
      },
      {
        text: "第23章 离线应用与客户端存储",
        link: "/chapter23/applications-storage",
        items: [
          { text: "23.1 离线检测", link: "/chapter23/01/offline-detection" },
          { text: "23.2 应用缓存", link: "/chapter23/02/application-cache" },
          {
            text: "23.3 数据存储",
            items: [
              { text: "23.3.1 Cookie", link: "/chapter23/03/Cookie" },
              { text: "23.3.2 IE用户数据", link: "/chapter23/03/IE用户数据" },
              { text: "23.3.3 Web存储机制", link: "/chapter23/03/Web存储机制" },
              { text: "23.3.4 IndexedDB", link: "/chapter23/03/IndexedDB" },
            ],
          },
        ],
      },
      {
        text: "第24章 最佳实践",
        link: "/chapter24/best-practices",
        items: [
          {
            text: "24.1 可维护性",
            items: [
              {
                text: "24.1.1 什么是可维护的代码",
                link: "/chapter24/01/什么是可维护的代码",
              },
              { text: "24.1.2 代码约定", link: "/chapter24/01/代码约定" },
              { text: "24.1.3 松散耦合", link: "/chapter24/01/松散耦合" },
              { text: "24.1.4 编程实践", link: "/chapter24/01/编程实践" },
            ],
          },
          {
            text: "24.2 性能",
            items: [
              { text: "24.2.1 注意作用域", link: "/chapter24/02/注意作用域" },
              {
                text: "24.2.2 选择正确方法",
                link: "/chapter24/02/选择正确方法",
              },
              {
                text: "24.2.3 最小化语句数",
                link: "/chapter24/02/最小化语句数",
              },
              { text: "24.2.4 优化DOM交互", link: "/chapter24/02/优化DOM交互" },
            ],
          },
          {
            text: "24.3 部署",
            items: [
              { text: "24.3.1 构建过程", link: "/chapter24/03/构建过程" },
              { text: "24.3.2 验证", link: "/chapter24/03/验证" },
              { text: "24.3.3 压缩", link: "/chapter24/03/压缩" },
            ],
          },
        ],
      },
      {
        text: "第25章 新兴的API",
        link: "/chapter25/emerging-APIs",
        items: [
          {
            text: "25.1 requestAnimationFrame()",
            items: [
              {
                text: "25.1.1 早期动画循环",
                link: "/chapter25/01/早期动画循环",
              },
              {
                text: "25.1.2 循环间隔的问题",
                link: "/chapter25/01/循环间隔的问题",
              },
              {
                text: "25.1.3 mozRequestAnimationFrame",
                link: "/chapter25/01/mozRequestAnimationFrame",
              },
              {
                text: "25.1.4 webkitRequestAnimationFrame与msRequestAnimationFrame",
                link: "/chapter25/01/webkitRequestAnimationFrame与msRequestAnimationFrame",
              },
            ],
          },
          {
            text: "25.2 Page Visibility API",
            link: "/chapter25/02/Page-Visibility-API",
          },
          {
            text: "25.3 Geolocation API",
            link: "/chapter25/03/Geolocation-API",
          },
          {
            text: "25.4 File API",
            items: [
              {
                text: "25.4.1 FileReader类型",
                link: "/chapter25/04/FileReader类型",
              },
              {
                text: "25.4.2 读取部分内容",
                link: "/chapter25/04/读取部分内容",
              },
              { text: "25.4.3 对象URL", link: "/chapter25/04/对象URL" },
              {
                text: "25.4.4 读取拖放的文件",
                link: "/chapter25/04/读取拖放的文件",
              },
              {
                text: "25.4.5 使用XHR上传文件",
                link: "/chapter25/04/使用XHR上传文件",
              },
            ],
          },
          { text: "25.5 Web 计时", link: "/chapter25/05/web-timing" },
          {
            text: "25.6 Web Workers",
            items: [
              { text: "25.6.1 使用Worker", link: "/chapter25/06/使用Worker" },
              {
                text: "25.6.2 Worker全局作用域",
                link: "/chapter25/06/Worker全局作用域",
              },
              {
                text: "25.6.3 包含其他脚本",
                link: "/chapter25/06/包含其他脚本",
              },
              {
                text: "25.6.4 Web Workers的未来",
                link: "/chapter25/06/Workers的未来",
              },
            ],
          },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2019-present Zhaohaodang <a href="https://beian.miit.gov.cn/" rel="noopener" target="_blank">苏ICP备16009967号-2</a>',
    },
    socialLinks: [{ icon: "github", link: "https://github.com/zhaohaodang" }],
    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    outline: {
      label: "目录",
      level: [2, 3],
    },
    returnToTopLabel: "回到顶部",
    externalLinkIcon: true,
    search: {
      provider: "local",
    },
    notFound: {
      quote: "页面地址发生变化，或已被删除。您可以回到首页查看更多内容。",
      linkText: "回到首页",
      linkLabel: "首页",
    },
  },
});
