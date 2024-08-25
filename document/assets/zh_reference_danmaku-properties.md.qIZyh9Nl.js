import{_ as a,c as e,o as s,a4 as n}from"./chunks/framework.DKWfLnao.js";const m=JSON.parse('{"title":"弹幕属性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/danmaku-properties.md","filePath":"zh/reference/danmaku-properties.md","lastUpdated":1724570130000}'),i={name:"zh/reference/danmaku-properties.md"},t=n('<h1 id="弹幕属性" tabindex="-1">弹幕属性 <a class="header-anchor" href="#弹幕属性" aria-label="Permalink to &quot;弹幕属性&quot;">​</a></h1><p>弹幕实例里面有很多用来记录当前弹幕状态的属性，你可以用他们来做一些判断，实现自己的业务目的。</p><h2 id="danmaku-data" tabindex="-1"><code>danmaku.data</code> <a class="header-anchor" href="#danmaku-data" aria-label="Permalink to &quot;`danmaku.data`&quot;">​</a></h2><p><strong>类型：<code>PushData&lt;T&gt;</code></strong></p><p><code>data</code> 是你在发送数据时传入的数据。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.data); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { value: 1 }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="danmaku-type" tabindex="-1"><code>danmaku.type</code> <a class="header-anchor" href="#danmaku-type" aria-label="Permalink to &quot;`danmaku.type`&quot;">​</a></h2><p><strong>类型：<code>facile&#39; | &#39;flexible&#39;</code></strong></p><p>弹幕的类型，分为普通弹幕和高级弹幕，普通弹幕的类型为 <code>facile</code>，你可以根据此属性来判断做不同的处理。</p><h2 id="danmaku-node" tabindex="-1"><code>danmaku.node</code> <a class="header-anchor" href="#danmaku-node" aria-label="Permalink to &quot;`danmaku.node`&quot;">​</a></h2><p><strong>类型：<code>HTMLElement</code></strong></p><p>弹幕的内置节点，你可以往这个节点里面渲染真正的弹幕内容。</p><h2 id="danmaku-loops" tabindex="-1"><code>danmaku.loops</code> <a class="header-anchor" href="#danmaku-loops" aria-label="Permalink to &quot;`danmaku.loops`&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br><strong>默认值：<code>0</code></strong></p><p>弹幕的播放次数，弹幕运动结束后会自动 <code>+1</code>，如果你有循环弹幕的需求，可能需要此属性。</p><h2 id="danmaku-duration" tabindex="-1"><code>danmaku.duration</code> <a class="header-anchor" href="#danmaku-duration" aria-label="Permalink to &quot;`danmaku.duration`&quot;">​</a></h2><p><strong>类型：<code>number</code></strong></p><p>弹幕的运动时长。</p><h2 id="danmaku-direction" tabindex="-1"><code>danmaku.direction</code> <a class="header-anchor" href="#danmaku-direction" aria-label="Permalink to &quot;`danmaku.direction`&quot;">​</a></h2><p><strong>类型：<code>&#39;right&#39; | &#39;left&#39; | &#39;none&#39;</code></strong></p><p>弹幕的运动方向。</p><h2 id="danmaku-isfixedduration" tabindex="-1"><code>danmaku.isFixedDuration</code> <a class="header-anchor" href="#danmaku-isfixedduration" aria-label="Permalink to &quot;`danmaku.isFixedDuration`&quot;">​</a></h2><p><strong>类型：<code>boolean</code></strong></p><p>用于判断当前弹幕实例是否被修正过运动时间。</p><h2 id="danmaku-pluginsystem" tabindex="-1"><code>danmaku.pluginSystem</code> <a class="header-anchor" href="#danmaku-pluginsystem" aria-label="Permalink to &quot;`danmaku.pluginSystem`&quot;">​</a></h2><p><strong>类型：<code>PluginSystem</code></strong></p><p>弹幕的插件系统实例，其 api 可以见 <strong>hooks-plugin</strong> 的文档。</p><p><a href="https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis" target="_blank" rel="noreferrer">https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis</a></p>',28),o=[t];function d(r,p,l,h,k,c){return s(),e("div",null,o)}const g=a(i,[["render",d]]);export{m as __pageData,g as default};
