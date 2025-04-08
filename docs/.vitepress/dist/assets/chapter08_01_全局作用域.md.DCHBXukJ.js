import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"全局作用域","description":"","frontmatter":{},"headers":[],"relativePath":"chapter08/01/全局作用域.md","filePath":"chapter08/01/全局作用域.md","lastUpdated":null}'),t={name:"chapter08/01/全局作用域.md"};function p(h,s,e,k,d,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="全局作用域" tabindex="-1">全局作用域 <a class="header-anchor" href="#全局作用域" aria-label="Permalink to &quot;全局作用域&quot;">​</a></h1><p>所有在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.age); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//29</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//29</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//29</span></span></code></pre></div><p>抛开全局变量会成为 window 对象的属性不谈，定义全局变量与在 window 对象上直接定义属性还是有一点差别：<strong>全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以</strong>。例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在 IE &lt; 9 时抛出错误，在其他所有浏览器中都返回 false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.age;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在 IE &lt; 9 时抛出错误，在其他所有浏览器中都返回 true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.color; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//returns true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.age); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//29</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.color); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//undefined</span></span></code></pre></div><p>IE8及更早版本在遇到使用 delete删除 window 属性的语句时，不管该属性最初是如何创建的，都会抛出错误，以示警告。IE9 及更高版本不会抛出错误。</p><p>尝试访问未声明的变量会抛出错误，但是通过查询 window 对象，可以知道某个可能未声明的变量是否存在。例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这里会抛出错误，因为 oldValue 未定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldValue;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这里不会抛出错误，因为这是一次属性查询</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//newValue 的值是 undefined</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.oldValue;</span></span></code></pre></div>`,8)]))}const o=i(t,[["render",p]]);export{g as __pageData,o as default};
