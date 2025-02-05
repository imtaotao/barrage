import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DKWfLnao.js";const g=JSON.parse('{"title":"弹幕钩子","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/danmaku-hooks.md","filePath":"zh/reference/danmaku-hooks.md","lastUpdated":1738756355000}'),e={name:"zh/reference/danmaku-hooks.md"},h=n(`<h1 id="弹幕钩子" tabindex="-1">弹幕钩子 <a class="header-anchor" href="#弹幕钩子" aria-label="Permalink to &quot;弹幕钩子&quot;">​</a></h1><p>弹幕的钩子只会在弹幕自身的行为发生改变的时候进行触发。</p><p><strong>1. 通过 <code>manager</code> 注册</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通过 \`manager\` 来注册需要加上 \`$\` 前缀</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>2. 通过弹幕实例来注册</strong></p><p>如果你在其他全局钩子里面拿到了弹幕实例，则可以通过下面这种方式注册，这在插件的编写中会很有用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-hide" tabindex="-1"><code>hooks.hide</code> <a class="header-anchor" href="#hooks-hide" aria-label="Permalink to &quot;\`hooks.hide\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>hide</code> 钩子会在弹幕隐藏的时候触发。</p><h2 id="hooks-show" tabindex="-1"><code>hooks.show</code> <a class="header-anchor" href="#hooks-show" aria-label="Permalink to &quot;\`hooks.show\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>show</code> 钩子会在弹幕从隐藏到显示的时候触发。</p><h2 id="hooks-pause" tabindex="-1"><code>hooks.pause</code> <a class="header-anchor" href="#hooks-pause" aria-label="Permalink to &quot;\`hooks.pause\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>pause</code> 钩子会在弹幕暂停的时候触发。</p><h2 id="hooks-resume" tabindex="-1"><code>hooks.resume</code> <a class="header-anchor" href="#hooks-resume" aria-label="Permalink to &quot;\`hooks.resume\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>resume</code> 钩子会在弹幕从暂停恢复的时候触发。</p><h2 id="hooks-beforemove" tabindex="-1"><code>hooks.beforeMove</code> <a class="header-anchor" href="#hooks-beforemove" aria-label="Permalink to &quot;\`hooks.beforeMove\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>beforeMove</code> 钩子会在弹幕即将运动的时候触发，你可以在此时对弹幕做一些样式变更操作。</p><h2 id="hooks-moved" tabindex="-1"><code>hooks.moved</code> <a class="header-anchor" href="#hooks-moved" aria-label="Permalink to &quot;\`hooks.moved\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p><code>moved</code> 钩子会在弹幕运动结束的时候触发，运动结束不代表会立即销毁，为了性能考虑，内核引擎会批量收集统一销毁。</p><h2 id="hooks-appendnode" tabindex="-1"><code>hooks.appendNode</code> <a class="header-anchor" href="#hooks-appendnode" aria-label="Permalink to &quot;\`hooks.appendNode\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;, HTMLElement]&gt;</code></strong></p><p><code>appendNode</code> 钩子会在弹幕的节点添加到容器时候触发，他在 <code>createNode</code> 节点之后。</p><h2 id="hooks-removenode" tabindex="-1"><code>hooks.removeNode</code> <a class="header-anchor" href="#hooks-removenode" aria-label="Permalink to &quot;\`hooks.removeNode\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;, HTMLElement]&gt;</code></strong></p><p><code>removeNode</code> 钩子会在弹幕从容器中移除的时候触发。</p><h2 id="hooks-createnode" tabindex="-1"><code>hooks.createNode</code> <a class="header-anchor" href="#hooks-createnode" aria-label="Permalink to &quot;\`hooks.createNode\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;, HTMLElement]&gt;</code></strong></p><p><code>createNode</code> 钩子会在弹幕的内置 HTML 节点创建后时候触发，你可以在这个钩子里面通过 <code>danmaku.node</code> 拿到这个节点，<strong>进行一些样式和节点的渲染操作，这是本框架扩展性很重要的一步操作，很重要</strong>。</p><p><strong>示例：</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DanmakuComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{props.danmaku.data.value}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 将组件渲染到弹幕的内置节点上</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.node).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DanmakuComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{danmaku} /&gt;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-beforedestroy" tabindex="-1"><code>hooks.beforeDestroy</code> <a class="header-anchor" href="#hooks-beforedestroy" aria-label="Permalink to &quot;\`hooks.beforeDestroy\`&quot;">​</a></h2><p><strong>类型：<code>AsyncHook&lt;[Danmaku&lt;T&gt;, unknown]&gt;</code></strong></p><p><code>beforeDestroy</code> 钩子会在弹幕销毁之前触发，这个钩子允许返回一个 <code>promise</code>，如果你需要手动调用 <a href="./../reference/danmaku-api/#danmaku-destroy"><strong><code>danmaku.destroy</code></strong></a> 方法，可以尝试传递 <code>mark</code>。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sleep } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;aidly&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $beforeDestroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 将会阻止 1s，然后销毁当前弹幕</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-destroyed" tabindex="-1"><code>hooks.destroyed</code> <a class="header-anchor" href="#hooks-destroyed" aria-label="Permalink to &quot;\`hooks.destroyed\`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Danmaku&lt;T&gt;, unknown]&gt;</code></strong></p><p><code>destroyed</code> 钩子会在弹幕销毁后触发，如果你需要手动调用 <a href="./../reference/danmaku-api/#danmaku-destroy"><strong><code>danmaku.destroy</code></strong></a> 方法，可以尝试传递 <code>mark</code>。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $destroyed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mark) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,46),t=[h];function k(p,l,o,d,r,E){return i(),a("div",null,t)}const y=s(e,[["render",k]]);export{g as __pageData,y as default};
