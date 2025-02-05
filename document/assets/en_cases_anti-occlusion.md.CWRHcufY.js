import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"Anti-Blocking Feature","description":"","frontmatter":{},"headers":[],"relativePath":"en/cases/anti-occlusion.md","filePath":"en/cases/anti-occlusion.md","lastUpdated":1738756355000}'),t={name:"en/cases/anti-occlusion.md"},n=e(`<h1 id="anti-blocking-feature" tabindex="-1">Anti-Blocking Feature <a class="header-anchor" href="#anti-blocking-feature" aria-label="Permalink to &quot;Anti-Blocking Feature&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>This section will teach you how to implement the anti-occlusion feature. Since the anti-occlusion feature requires defining the occluded area, it is generally done by defining an <code>svg</code> image to set the area and then using the <code>CSS</code> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image" target="_blank" rel="noreferrer"><strong><code>maskImage</code></strong></a> property to achieve it. There are mainly two steps you need to implement.</p><div class="note custom-block github-alert"><p class="custom-block-title">Hint</p><p></p><ol><li>Poll to get the <code>svg</code> image that needs to prevent occlusion, usually generated through <strong>AI</strong>, but it also depends on business requirements.</li><li>Call the danmu library&#39;s <a href="./../reference/manager-api/#manager-updateoccludedurl"><strong><code>manager.updateOccludedUrl</code></strong></a> to set the <code>CSS</code> property.</li></ol></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://abc.com/svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 1. Update the mask (if the second parameter is not provided,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //    it defaults to setting on \`manager.container.node\`)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 2. The url can also be a base64 image, which might be helpful for you</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateOccludedUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#Id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // // Polling request</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div>`,6),l=[n];function h(p,r,k,o,d,c){return a(),i("div",null,l)}const u=s(t,[["render",h]]);export{E as __pageData,u as default};
