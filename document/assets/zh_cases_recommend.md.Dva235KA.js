import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"直播和视频场景的建议","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cases/recommend.md","filePath":"zh/cases/recommend.md","lastUpdated":1735270220000}'),n={name:"zh/cases/recommend.md"},t=e(`<h1 id="直播和视频场景的建议" tabindex="-1">直播和视频场景的建议 <a class="header-anchor" href="#直播和视频场景的建议" aria-label="Permalink to &quot;直播和视频场景的建议&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>由于在直播和视频直播中，弹幕的实时性要求比较高，而默认的<a href="./../reference/manager-configuration/#config-mode"><strong>碰撞算法配置为</strong></a> <code>strict</code>，当不满足渲染条件的时候会延迟到满足渲染条件后才渲染，<strong>所以你应当设置为 <code>adaptive</code></strong>，这会让引擎会先尝试进行碰撞检测，如果不满足条件会忽略碰撞算法而立即渲染。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在初始化的时候设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // .</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adaptive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者使用 \`setMode()\` api</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adaptive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>如果你想设置一条轨道内弹幕之间最小间距（仅当弹幕命中了碰撞检测的时候才会生效）</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同一条轨道内弹幕的间距最小为 10px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,7),h=[t];function l(p,d,r,k,o,c){return i(),a("div",null,h)}const m=s(n,[["render",l]]);export{E as __pageData,m as default};
