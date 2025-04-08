import{_ as i,c as t,o as a,ag as n}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"script 元素","description":"","frontmatter":{},"headers":[],"relativePath":"chapter02/01/script元素.md","filePath":"chapter02/01/script元素.md","lastUpdated":null}'),p={name:"chapter02/01/script元素.md"};function l(h,s,e,r,k,c){return a(),t("div",null,s[0]||(s[0]=[n(`<h1 id="script-元素" tabindex="-1">script 元素 <a class="header-anchor" href="#script-元素" aria-label="Permalink to &quot;script 元素&quot;">​</a></h1><p>属性：</p><ul><li><strong>async</strong>：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或 等待加载其他脚本。<strong>只对外部脚本文件有效</strong>。</li><li><strong>charset</strong>：可选。表示通过 src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值， 因此这个属性很少有人用。</li><li><strong>defer</strong>：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。<strong>只对外部脚本文件有</strong><strong>效</strong>。IE7 及更早版本对嵌入脚本也支持这个属性。</li><li><strong>language</strong>：已废弃。原来用于表示编写代码使用的脚本语言（如 JavaScript、JavaScript1.2 或 VBScript）。大多数浏览器会忽略这个属性，因此也没有必要再用了。</li><li><strong>src</strong>：可选。表示包含要执行代码的外部文件。</li><li><strong>type</strong>：可选。可以看成是 language 的替代属性；表示编写代码使用的脚本语言的内容类型（也 称为 MIME 类型）。</li></ul><p>在使用 <code>&lt;script&gt; </code>嵌入 JavaScript 代码时，记住不要在代码中的任何地方出现 <code>&lt;/script&gt;</code> 字符串。 例如，浏览器在加载下面所示的代码时就会产生一个错误：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayScript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;/script&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>因为按照解析嵌入式代码的规则，当浏览器遇到字符串 <code>&lt;/script&gt;</code> 时，就会认为那是结束的<code>&lt;/script&gt;</code>标签。而通过转义字符“/”可以解决这个问题</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayScript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">script&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,7)]))}const d=i(p,[["render",l]]);export{g as __pageData,d as default};
