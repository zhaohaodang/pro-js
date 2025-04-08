import{_ as a,c as i,o as t,ag as n}from"./chunks/framework.DPDPlp3K.js";const E=JSON.parse('{"title":"Global对象","description":"","frontmatter":{},"headers":[],"relativePath":"chapter05/07/Global对象.md","filePath":"chapter05/07/Global对象.md","lastUpdated":null}'),e={name:"chapter05/07/Global对象.md"};function l(p,s,h,r,d,k){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="global对象" tabindex="-1">Global对象 <a class="header-anchor" href="#global对象" aria-label="Permalink to &quot;Global对象&quot;">​</a></h1><p>所有在全局作用域中定义的属性和函数，都是Global 对象的属性。</p><p>isNaN()、isFinite()、parseInt()以及parseFloat()，实际上全都是Global对象的方法。</p><p>除此之外，Global 对象还包含其他一些方法：</p><h3 id="uri-编码方法" tabindex="-1">URI 编码方法 <a class="header-anchor" href="#uri-编码方法" aria-label="Permalink to &quot;URI 编码方法&quot;">​</a></h3><p>Global 对象的encodeURI()和encodeURIComponent()方法可以对URI进行编码，以便发送给浏览器。</p><p>有效的URI 中不能包含某些字符，例如空格。而这两个URI 编码方法就可以对URI 进行编码，它们用特殊的UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。</p><p>encodeURI()不会对本身属于URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号。</p><p>encodeURIComponent()则会对它发现的任何非标准字符进行编码。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uri </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://www.wrox.com/illegal value.htm#start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&quot;http://www.wrox.com/illegal%20value.htm#start&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uri));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&quot;http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uri));</span></span></code></pre></div><blockquote><p>一般来说， 我们使用encodeURIComponent() 方法的时候要比使用encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础URI进行编码。</p></blockquote><p>与encodeURI()和encodeURIComponent()方法对应的两个方法分别是decodeURI()和decodeURIComponent()。</p><p>decodeURI()只能对使用encodeURI()替换的字符进行解码。例如，它可将%20 替换成一个空格，但不会对%23 作任何处理。</p><p>decodeURIComponent()能够解码使用encodeURIComponent()编码的所有字符。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uri </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uri));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//http://www.wrox.com/illegal value.htm#start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uri));</span></span></code></pre></div><p>escape()和unescape()只能正确地编码ASCII 字符，已经被废弃！</p><h3 id="eval-方法" tabindex="-1">eval()方法 <a class="header-anchor" href="#eval-方法" aria-label="Permalink to &quot;eval()方法&quot;">​</a></h3><p>eval()方法就像是一个完整的ECMAScript 解析器，它只接受一个参数，即要执行的或JavaScript字符串，然后把执行结果插入到原位置。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alert(&#39;hi&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这行代码的作用等价于下面这行代码：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>在eval()中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建。</p><p>严格模式下，在外部访问不到eval()中创建的任何变量或函数。</p><p><em>Global 对象的属性</em></p><p>特殊的值undefined、NaN 以及Infinity 都是Global 对象的属性。</p><p>所有原生引用类型的构造函数，像Object 和Function，也都是Global 对象的属性。</p><p>下表列出了Global 对象的所有属性：</p><table tabindex="0"><thead><tr><th>属 性</th><th>说 明</th></tr></thead><tbody><tr><td>undefined</td><td>特殊值undefined</td></tr><tr><td>NaN</td><td>特殊值NaN</td></tr><tr><td>Infinity</td><td>特殊值Infinity</td></tr><tr><td>Object</td><td>构造函数Object</td></tr><tr><td>Array</td><td>构造函数Array</td></tr><tr><td>Function</td><td>构造函数Function</td></tr><tr><td>Boolean</td><td>构造函数Boolean</td></tr><tr><td>String</td><td>构造函数String</td></tr><tr><td>Number</td><td>构造函数Number</td></tr><tr><td>Date</td><td>构造函数Date</td></tr><tr><td>RegExp</td><td>构造函数RegExp</td></tr><tr><td>Error</td><td>构造函数Error</td></tr><tr><td>EvalError</td><td>构造函数EvalError</td></tr><tr><td>RangeError</td><td>构造函数RangeError</td></tr><tr><td>ReferenceError</td><td>构造函数ReferenceError</td></tr><tr><td>SyntaxError</td><td>构造函数SyntaxError</td></tr><tr><td>TypeError</td><td>构造函数TypeError</td></tr><tr><td>URIError</td><td>构造函数URIError</td></tr></tbody></table><p>ECMAScript 5 明确禁止给undefined、NaN 和Infinity 赋值，这样做即使在非严格模式下也会导致错误。</p><p><em>window 对象</em></p><p>ECMAScript 虽然没有指出如何直接访问Global 对象，但Web 浏览器都是将这个全局对象作为window 对象的一部分加以实现的。因此，在全局作用域中声明的所有变量和函数，就都成为了window对象的属性。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.color);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&quot;red&quot;</span></span></code></pre></div><p>JavaScript中的window 对象除了扮演ECMAScript规定的Global 对象的角色外，还承担了很多别的任务。</p><p>另一种取得Global 对象的方法是使用以下代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> global </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div>`,33)]))}const c=a(e,[["render",l]]);export{E as __pageData,c as default};
