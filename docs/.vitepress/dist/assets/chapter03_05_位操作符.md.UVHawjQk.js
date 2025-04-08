import{_ as i,c as a,o as h,ag as k}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"3.5.2 位操作符","description":"","frontmatter":{},"headers":[],"relativePath":"chapter03/05/位操作符.md","filePath":"chapter03/05/位操作符.md","lastUpdated":null}'),n={name:"chapter03/05/位操作符.md"};function p(t,s,l,e,r,F){return h(),a("div",null,s[0]||(s[0]=[k(`<h1 id="_3-5-2-位操作符" tabindex="-1">3.5.2 位操作符 <a class="header-anchor" href="#_3-5-2-位操作符" aria-label="Permalink to &quot;3.5.2 位操作符&quot;">​</a></h1><p>位操作符用于在最基本的层次上，即按内存中表示数值的位来操作数值</p><p><strong><em>按位非（NOT）</em></strong></p><p>按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 二进制00000000000000000000000000011001</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num1; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 二进制11111111111111111111111111100110</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -26</span></span></code></pre></div><blockquote><p>按位非操作的本质，就是操作数的负值减1</p></blockquote><p><strong><em>按位与（AND）</em></strong></p><p>按位与操作只在两个数值的对应位都是1 时才返回1，任何一位是0，结果都是0</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0011</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">---------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span></span></code></pre></div><p><strong><em>按位或（OR）</em></strong></p><p>按位或操作在有一个位是1 的情况下就返回1，而只有在两个位都是0 的情况下才返回0</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//27</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0011</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1011</span></span></code></pre></div><p><strong><em>按位异或（XOR）</em></strong></p><p>这个操作在两个数值对应位上只有一个1 时才返回1，如果对应的两位都是1 或都是0，则返回0</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//26</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0011</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">---------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1010</span></span></code></pre></div><p><strong><em>左移</em></strong></p><p>将数值的所有位向左移动指定的位数，原数值的右侧多出的空位以0 来填充</p><p><strong><em>有符号的右移</em></strong></p><p>将数值向右移动，但保留符号位（即正负号标记位）</p><p><strong><em>无符号右移</em></strong></p><p>将数值的所有位都向右移动，原数值的左侧多出的空位以0来填充</p>`,21)]))}const g=i(n,[["render",p]]);export{C as __pageData,g as default};
