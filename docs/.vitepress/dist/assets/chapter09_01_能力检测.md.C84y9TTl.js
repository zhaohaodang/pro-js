import{_ as a,c as i,o as t,ag as n}from"./chunks/framework.DPDPlp3K.js";const c=JSON.parse('{"title":"能力检测，不是浏览器检测","description":"","frontmatter":{},"headers":[],"relativePath":"chapter09/01/能力检测.md","filePath":"chapter09/01/能力检测.md","lastUpdated":null}'),e={name:"chapter09/01/能力检测.md"};function p(l,s,h,r,k,d){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="能力检测-不是浏览器检测" tabindex="-1">能力检测，不是浏览器检测 <a class="header-anchor" href="#能力检测-不是浏览器检测" aria-label="Permalink to &quot;能力检测，不是浏览器检测&quot;">​</a></h1><p>**检测某个或某几个特性并不能够确定浏览器。**下面给出的这段代码（或与之差不多的代码）可以在许多网站中看到，这种“浏览器检测”代码就是错误地依赖能力检测的典型示例。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//错误！还不够具体</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isFirefox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(navigator.vendor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> navigator.vendorSub);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//错误！假设过头了</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isIE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.uniqueID);</span></span></code></pre></div><p>这两行代码代表了对能力检测的典型误用。以前，确实可以通过检测 navigator.vendor 和navigator.vendorSub 来确定 Firefox 浏览器。但是，Safari 也依葫芦画瓢地实现了相同的属性。于是，这段代码就会导致人们作出错误的判断。</p>`,4)]))}const g=a(e,[["render",p]]);export{c as __pageData,g as default};
