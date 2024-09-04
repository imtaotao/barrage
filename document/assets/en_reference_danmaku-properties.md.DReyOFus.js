import{_ as a,c as e,o as n,a4 as s}from"./chunks/framework.DKWfLnao.js";const m=JSON.parse('{"title":"Danmaku Properties","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/danmaku-properties.md","filePath":"en/reference/danmaku-properties.md","lastUpdated":1725438931000}'),t={name:"en/reference/danmaku-properties.md"},i=s('<h1 id="danmaku-properties" tabindex="-1">Danmaku Properties <a class="header-anchor" href="#danmaku-properties" aria-label="Permalink to &quot;Danmaku Properties&quot;">​</a></h1><p>Danmaku instances have many properties that record the current state of the danmaku. You can use them to make decisions and achieve your own business objectives.</p><h2 id="danmaku-data" tabindex="-1"><code>danmaku.data</code> <a class="header-anchor" href="#danmaku-data" aria-label="Permalink to &quot;`danmaku.data`&quot;">​</a></h2><p><strong>Type: <code>PushData&lt;T&gt;</code></strong></p><p><code>data</code> is the data you passed in when sending the danmaku.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.data); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { value: 1 }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="danmaku-type" tabindex="-1"><code>danmaku.type</code> <a class="header-anchor" href="#danmaku-type" aria-label="Permalink to &quot;`danmaku.type`&quot;">​</a></h2><p><strong>Type: <code>facile&#39; | &#39;flexible&#39;</code></strong></p><p>The type of danmaku can be either <code>facile</code> or <code>flexible</code>. You can use this property to make different decisions.</p><h2 id="danmaku-node" tabindex="-1"><code>danmaku.node</code> <a class="header-anchor" href="#danmaku-node" aria-label="Permalink to &quot;`danmaku.node`&quot;">​</a></h2><p><strong>Type: <code>HTMLElement</code></strong></p><p>The built-in node of the danmaku, where you can render the actual content of the danmaku.</p><h2 id="danmaku-loops" tabindex="-1"><code>danmaku.loops</code> <a class="header-anchor" href="#danmaku-loops" aria-label="Permalink to &quot;`danmaku.loops`&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br><strong>Default: <code>0</code></strong></p><p>The playback count of the danmaku, which automatically increments by <code>+1</code> after the danmaku finishes moving. You may need this property if you have looping danmaku requirements.</p><h2 id="danmaku-duration" tabindex="-1"><code>danmaku.duration</code> <a class="header-anchor" href="#danmaku-duration" aria-label="Permalink to &quot;`danmaku.duration`&quot;">​</a></h2><p><strong>Type: <code>number</code></strong></p><p>The duration of the danmaku&#39;s movement.</p><h2 id="danmaku-direction" tabindex="-1"><code>danmaku.direction</code> <a class="header-anchor" href="#danmaku-direction" aria-label="Permalink to &quot;`danmaku.direction`&quot;">​</a></h2><p><strong>Type: <code>&#39;right&#39; | &#39;left&#39; | &#39;none&#39;</code></strong></p><p>The direction of the danmaku&#39;s movement.</p><h2 id="danmaku-isfixedduration" tabindex="-1"><code>danmaku.isFixedDuration</code> <a class="header-anchor" href="#danmaku-isfixedduration" aria-label="Permalink to &quot;`danmaku.isFixedDuration`&quot;">​</a></h2><p><strong>Type: <code>boolean</code></strong></p><p>Used to determine whether the movement duration of the current danmaku instance has been adjusted.</p><h2 id="danmaku-pluginsystem" tabindex="-1"><code>danmaku.pluginSystem</code> <a class="header-anchor" href="#danmaku-pluginsystem" aria-label="Permalink to &quot;`danmaku.pluginSystem`&quot;">​</a></h2><p><strong>Type: <code>PluginSystem</code></strong></p><p>The plugin system instance for the danmaku. For its API, refer to the <strong>hooks-plugin</strong> documentation.</p><p><a href="https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis" target="_blank" rel="noreferrer">https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis</a></p>',28),o=[i];function d(r,h,p,l,u,k){return n(),e("div",null,o)}const g=a(t,[["render",d]]);export{m as __pageData,g as default};
