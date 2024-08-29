import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DKWfLnao.js";const g=JSON.parse('{"title":"防遮挡功能的实现","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cases/anti-occlusion.md","filePath":"zh/cases/anti-occlusion.md","lastUpdated":1724923049000}'),t={name:"zh/cases/anti-occlusion.md"},e=n(`<h1 id="防遮挡功能的实现" tabindex="-1">防遮挡功能的实现 <a class="header-anchor" href="#防遮挡功能的实现" aria-label="Permalink to &quot;防遮挡功能的实现&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>本章节将学习如何实现防遮挡功能，由于防遮挡功能需要定义被遮挡的范围，一般情况下，都是通过定义一个 <code>svg</code> 图片设置范围，然后通过 <code>CSS</code> 的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image" target="_blank" rel="noreferrer"><strong><code>maskImage</code></strong></a> 属性来实现，主要是有以下两个步骤需要你来实现。</p><div class="note custom-block github-alert"><p class="custom-block-title">提示</p><p></p><ol><li>轮询获取需要防止被覆盖的 svg 图片，一般是通过 <strong>AI</strong> 来生成，不过也视业务属性来确定。</li><li>调用 danmu 库提供的 <a href="./../reference/manager-api/#manager-updateoccludedurl"><strong><code>manager.updateOccludedUrl</code></strong></a> 来设置 <code>CSS</code> 属性。</li></ol></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://abc.com/svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 1. 更新蒙层（如果不传第二个参数，默认设置到 manager.container.node 上）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 2. url 也可以是 base64 图片，这可能会对你有帮助</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateOccludedUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#Id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 轮询请求</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div>`,6),h=[e];function l(p,k,r,d,c,o){return a(),i("div",null,h)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
