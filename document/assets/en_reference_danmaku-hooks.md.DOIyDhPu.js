import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"Danmaku Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/danmaku-hooks.md","filePath":"en/reference/danmaku-hooks.md","lastUpdated":1730016756000}'),n={name:"en/reference/danmaku-hooks.md"},t=e(`<h1 id="danmaku-hooks" tabindex="-1">Danmaku Hooks <a class="header-anchor" href="#danmaku-hooks" aria-label="Permalink to &quot;Danmaku Hooks&quot;">​</a></h1><p>Danmaku hooks are only triggered when the behavior of the danmaku itself changes.</p><p><strong>1. Register through <code>manager</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// When registering through \`manager\`, you need to add the \`$\` prefix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>2. Register through danmaku instance</strong></p><p>If you obtain a danmaku instance in other global hooks, you can register it this way. This can be very useful when writing plugins.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-hide" tabindex="-1"><code>hooks.hide</code> <a class="header-anchor" href="#hooks-hide" aria-label="Permalink to &quot;\`hooks.hide\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>hide</code> hook is triggered when the danmaku is hidden.</p><h2 id="hooks-show" tabindex="-1"><code>hooks.show</code> <a class="header-anchor" href="#hooks-show" aria-label="Permalink to &quot;\`hooks.show\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>show</code> hook is triggered when the danmaku changes from hidden to visible.</p><h2 id="hooks-pause" tabindex="-1"><code>hooks.pause</code> <a class="header-anchor" href="#hooks-pause" aria-label="Permalink to &quot;\`hooks.pause\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>pause</code> hook is triggered when the danmaku is paused.</p><h2 id="hooks-resume" tabindex="-1"><code>hooks.resume</code> <a class="header-anchor" href="#hooks-resume" aria-label="Permalink to &quot;\`hooks.resume\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>resume</code> hook is triggered when the danmaku resumes from being paused.</p><h2 id="hooks-beforemove" tabindex="-1"><code>hooks.beforeMove</code> <a class="header-anchor" href="#hooks-beforemove" aria-label="Permalink to &quot;\`hooks.beforeMove\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>beforeMove</code> hook is triggered just before the danmaku starts moving. You can make some style changes to the danmaku at this time.</p><h2 id="hooks-moved" tabindex="-1"><code>hooks.moved</code> <a class="header-anchor" href="#hooks-moved" aria-label="Permalink to &quot;\`hooks.moved\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>moved</code> hook is triggered when the danmaku finishes moving. Finishing the movement does not mean it will be destroyed immediately. For performance reasons, the kernel will batch collect and destroy them together.</p><h2 id="hooks-appendnode" tabindex="-1"><code>hooks.appendNode</code> <a class="header-anchor" href="#hooks-appendnode" aria-label="Permalink to &quot;\`hooks.appendNode\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>appendNode</code> hook is triggered when the danmaku node is added to the container. It occurs after the <code>createNode</code> hook.</p><h2 id="hooks-removenode" tabindex="-1"><code>hooks.removeNode</code> <a class="header-anchor" href="#hooks-removenode" aria-label="Permalink to &quot;\`hooks.removeNode\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>removeNode</code> hook will be triggered when the danmaku is removed from the container.</p><h2 id="hooks-createnode" tabindex="-1"><code>hooks.createNode</code> <a class="header-anchor" href="#hooks-createnode" aria-label="Permalink to &quot;\`hooks.createNode\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;]&gt;</code></strong></p><p>The <code>createNode</code> hook will be triggered after the built-in HTML node of the danmaku is created. You can use <code>danmaku.node</code> to get this node within this hook and **perform some styling and rendering operations on the node. This is a very important step for the extensibility of this framework **.</p><p><strong>Example:</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DanmakuComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{props.danmaku.data.value}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Render the component onto the built-in node of the danmaku</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.node).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DanmakuComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{danmaku} /&gt;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-beforedestroy" tabindex="-1"><code>hooks.beforeDestroy</code> <a class="header-anchor" href="#hooks-beforedestroy" aria-label="Permalink to &quot;\`hooks.beforeDestroy\`&quot;">​</a></h2><p><strong>类型：<code>AsyncHook&lt;[Danmaku&lt;T&gt;, unknown]&gt;</code></strong></p><p>The <code>beforeDestroy</code> hook is triggered before the danmaku is destroyed. This hook allows returning a <code>promise</code>. If you need to manually call the <a href="./../reference/danmaku-api/#danmaku-destroy"><strong><code>danmaku.destroy</code></strong></a> method, you can try passing a <code>mark</code>.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sleep } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;aidly&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $beforeDestroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Will block for 1s, then destroy the current danmaku</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-destroyed" tabindex="-1"><code>hooks.destroyed</code> <a class="header-anchor" href="#hooks-destroyed" aria-label="Permalink to &quot;\`hooks.destroyed\`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Danmaku&lt;T&gt;, unknown]&gt;</code></strong></p><p>The <code>destroyed</code> hook is triggered when the danmaku is destroyed. If you need to manually call the <a href="./../reference/danmaku-api/#danmaku-destroy"><strong><code>danmaku.destroy</code></strong></a> method, you can try passing a <code>mark</code>.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $destroyed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mark) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,46),h=[t];function o(k,l,p,d,r,g){return i(),a("div",null,h)}const y=s(n,[["render",o]]);export{E as __pageData,y as default};
