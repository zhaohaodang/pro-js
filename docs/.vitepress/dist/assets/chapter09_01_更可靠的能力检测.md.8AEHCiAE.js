import{_ as i,c as a,o as t,ag as n}from"./chunks/framework.DPDPlp3K.js";const c=JSON.parse('{"title":"更可靠的能力检测","description":"","frontmatter":{},"headers":[],"relativePath":"chapter09/01/更可靠的能力检测.md","filePath":"chapter09/01/更可靠的能力检测.md","lastUpdated":null}'),p={name:"chapter09/01/更可靠的能力检测.md"};function e(l,s,h,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="更可靠的能力检测" tabindex="-1">更可靠的能力检测 <a class="header-anchor" href="#更可靠的能力检测" aria-label="Permalink to &quot;更可靠的能力检测&quot;">​</a></h1><p>能力检测对于想知道某个特性是否会按照适当方式行事（而不仅仅是某个特性存在）非常有用。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//不要这样做！这不是能力检测——只检测了是否存在相应的方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isSortable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">object.sort;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>更好的方式是检测 sort 是不是一个函数</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这样更好：检查 sort 是不是函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isSortable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> object.sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;function&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>在可能的情况下，要尽量使用 typeof 进行能力检测。</strong></p>`,6)]))}const E=i(p,[["render",e]]);export{c as __pageData,E as default};
