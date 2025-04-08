import{_ as s,c as i,o as t,ag as e}from"./chunks/framework.DPDPlp3K.js";const c=JSON.parse('{"title":"继承的方法","description":"","frontmatter":{},"headers":[],"relativePath":"chapter05/03/继承的方法.md","filePath":"chapter05/03/继承的方法.md","lastUpdated":null}'),n={name:"chapter05/03/继承的方法.md"};function p(l,a,h,r,o,k){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="继承的方法" tabindex="-1">继承的方法 <a class="header-anchor" href="#继承的方法" aria-label="Permalink to &quot;继承的方法&quot;">​</a></h1><p>与其他引用类型一样，Date 类型也重写了toLocaleString()、toString()和valueOf()方法，但这些方法返回的值与其他类型中的方法不同。</p><p>Date 类型的toLocaleString()方法会按照与浏览器设置的地区相适应的格式返回日期和时间。这大致意味着时间格式中会包含AM 或PM，但不会包含时区信息（当然，具体的格式会因浏览器而异）。</p><p>toString()方法则通常返回带有时区信息的日期和时间。</p><p>chrome 59中文版示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&quot;Wed Apr 05 2017 14:59:24 GMT+0800 (中国标准时间)&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLocaleString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&quot;2017/4/5 下午3:00:10&quot;</span></span></code></pre></div>`,6)]))}const g=s(n,[["render",p]]);export{c as __pageData,g as default};
