import{_ as i,c as a,o as t,ag as n}from"./chunks/framework.DPDPlp3K.js";const E=JSON.parse('{"title":"语句","description":"","frontmatter":{},"headers":[],"relativePath":"chapter03/01/语句.md","filePath":"chapter03/01/语句.md","lastUpdated":null}'),p={name:"chapter03/01/语句.md"};function e(l,s,h,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="语句" tabindex="-1">语句 <a class="header-anchor" href="#语句" aria-label="Permalink to &quot;语句&quot;">​</a></h1><p>ECMAScript 中的语句以一个分号结尾；如果省略分号，则由解析器确定语句的结尾：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 即使没有分号也是有效的语句</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> diff </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有效的语句</span></span></code></pre></div><blockquote><p>加上分号也会在某些情况下增进代码的性能，因为这样解析器就不必再花时间推测应该在哪里插入分号了</p></blockquote><p>最佳实践是始终在控制语句中使用代码块：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(test); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有效但容易出错，不要使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 推荐使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(test);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6)]))}const o=i(p,[["render",e]]);export{E as __pageData,o as default};
