import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.DKWfLnao.js";const u=JSON.parse('{"title":"Manager Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/manager-hooks.md","filePath":"en/reference/manager-hooks.md","lastUpdated":1735270044000}'),n={name:"en/reference/manager-hooks.md"},o=i('<h1 id="manager-hooks" tabindex="-1">Manager Hooks <a class="header-anchor" href="#manager-hooks" aria-label="Permalink to &quot;Manager Hooks&quot;">​</a></h1><p>The hooks for the manager include both the hooks for the <code>manager</code> itself and the hooks for the <code>danmaku</code>.</p><div class="note custom-block github-alert"><p class="custom-block-title">Tip</p><p></p><ol><li>Danmaku hooks and global hooks are distinguished by the <strong><code>$</code></strong> prefix.</li><li>This section will only introduce the hooks for the <code>manager</code> itself, as danmaku hooks will be covered in the <a href="./danmaku-hooks.html"><strong>danmaku hooks section</strong></a>.</li></ol></div><h2 id="_1-register-during-initialization" tabindex="-1">1. Register during initialization <a class="header-anchor" href="#_1-register-during-initialization" aria-label="Permalink to &quot;1. Register during initialization&quot;">​</a></h2><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="_2-register-through-use" tabindex="-1">2. Register through <code>use</code> <a class="header-anchor" href="#_2-register-through-use" aria-label="Permalink to &quot;2. Register through `use`&quot;">​</a></h2><p>The <a href="./manager-api/#manager-use"><strong><code>manager.use()</code></strong></a> API is used to register plugins. If you have external plugins or self-written plugins available, you can also register them using this method.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-init" tabindex="-1"><code>hooks.init</code> <a class="header-anchor" href="#hooks-init" aria-label="Permalink to &quot;`hooks.init`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[manager: Manager&lt;T&gt;]&gt;</code></strong></p><p>The <code>init</code> hook is triggered when the <code>manager</code> is created. Generally, you will only use this when creating the <code>manager</code> through the <code>create</code> method. This is just syntactic sugar to conveniently get the <code>manager</code> instance.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">manager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-push" tabindex="-1"><code>hooks.push</code> <a class="header-anchor" href="#hooks-push" aria-label="Permalink to &quot;`hooks.push`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[PushData | Danmaku&lt;PushData&gt;, DanmakuType, boolean]&gt;</code></strong></p><p>The <code>push</code> hook is triggered when sending danmaku. It is triggered when calling <code>manager.push()</code>, <code>manager.unshift()</code>, and <code>manager.pushFlexibleDanmaku()</code>. You can use this hook to access the danmaku data to be sent, the danmaku type, whether it is <code>unshift</code>, and more.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">isUnshift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Handle flexible danmaku</span></span>\n<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;flexible&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-start" tabindex="-1"><code>hooks.start</code> <a class="header-anchor" href="#hooks-start" aria-label="Permalink to &quot;`hooks.start`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>start</code> hook is triggered when the rendering engine starts. It is only triggered when calling <code>manager.startPlaying()</code>.</p><h2 id="hooks-stop" tabindex="-1"><code>hooks.stop</code> <a class="header-anchor" href="#hooks-stop" aria-label="Permalink to &quot;`hooks.stop`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>stop</code> hook is triggered when the rendering engine stops. It is only triggered when calling <code>manager.stopPlaying()</code>.</p><h2 id="hooks-show" tabindex="-1"><code>hooks.show</code> <a class="header-anchor" href="#hooks-show" aria-label="Permalink to &quot;`hooks.show`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>show</code> hook is triggered when danmaku are batch changed from hidden to visible. It is only triggered when calling <code>manager.show()</code>.</p><h2 id="hooks-hide" tabindex="-1"><code>hooks.hide</code> <a class="header-anchor" href="#hooks-hide" aria-label="Permalink to &quot;`hooks.hide`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>hide</code> hook is triggered when danmaku are batch hidden. It is only triggered when calling <code>manager.hide()</code>.</p><h2 id="hooks-clear" tabindex="-1"><code>hooks.clear</code> <a class="header-anchor" href="#hooks-clear" aria-label="Permalink to &quot;`hooks.clear`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>clear</code> hook is triggered when clearing the currently rendered danmaku and danmaku data from memory. It is only triggered when calling <code>manager.clear()</code>.</p><h2 id="hooks-mount" tabindex="-1"><code>hooks.mount</code> <a class="header-anchor" href="#hooks-mount" aria-label="Permalink to &quot;`hooks.mount`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[HTMLElement]&gt;</code></strong></p><p>The <code>mount</code> hook is triggered when the container is mounted to a specified <code>DOM</code> node. You can access the mounted node within the hook. It is only triggered when calling <code>manager.mount()</code>.</p><h2 id="hooks-unmount" tabindex="-1"><code>hooks.unmount</code> <a class="header-anchor" href="#hooks-unmount" aria-label="Permalink to &quot;`hooks.unmount`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[HTMLElement | null]&gt;</code></strong></p><p>The <code>unmount</code> hook is triggered when the container is unmounted from the currently mounted node. You can access the node to be unmounted within the hook, if there is one. It is only triggered when calling <code>manager.unmount()</code>.</p><h2 id="hooks-freeze" tabindex="-1"><code>hooks.freeze</code> <a class="header-anchor" href="#hooks-freeze" aria-label="Permalink to &quot;`hooks.freeze`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>freeze</code> hook is triggered when the currently rendered danmaku are frozen. It is only triggered when calling <code>manager.freeze()</code>.</p><h2 id="hooks-unfreeze" tabindex="-1"><code>hooks.unfreeze</code> <a class="header-anchor" href="#hooks-unfreeze" aria-label="Permalink to &quot;`hooks.unfreeze`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>unfreeze</code> hook is triggered when the currently frozen danmaku are unfrozen. It is only triggered when calling <code>manager.unfreeze()</code>.</p><h2 id="hooks-format" tabindex="-1"><code>hooks.format</code> <a class="header-anchor" href="#hooks-format" aria-label="Permalink to &quot;`hooks.format`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>format</code> hook is triggered when the container is formatted. It is only triggered when manually formatting by calling <code>manager.format()</code>.</p><h2 id="hooks-render" tabindex="-1"><code>hooks.render</code> <a class="header-anchor" href="#hooks-render" aria-label="Permalink to &quot;`hooks.render`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[DanmakuType]&gt;</code></strong></p><p>The <code>render</code> hook is triggered during each rendering poll.</p><h2 id="hooks-willrender" tabindex="-1"><code>hooks.willRender</code> <a class="header-anchor" href="#hooks-willrender" aria-label="Permalink to &quot;`hooks.willRender`&quot;">​</a></h2><p><strong>Type: <code>SyncWaterfallHook&lt;RenderData&gt;</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RenderData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DanmakuType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prevent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trackIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>willRender</code> hook is triggered just before the danmaku enters the rendering queue. You can use this hook to prevent the danmaku from rendering. This is useful for implementing features that filter danmaku based on <strong>keywords</strong> or <strong>track index</strong>.</p><h2 id="hooks-finished" tabindex="-1"><code>hooks.finished</code> <a class="header-anchor" href="#hooks-finished" aria-label="Permalink to &quot;`hooks.finished`&quot;">​</a></h2><p><strong>Type: <code>SyncHook</code></strong></p><p>The <code>finished</code> hook is triggered when all danmaku in the current memory have been rendered. However, this does not mean that no more danmaku will be rendered in the future, as you may continue to send new danmaku.</p><h2 id="hooks-limitwarning" tabindex="-1"><code>hooks.limitWarning</code> <a class="header-anchor" href="#hooks-limitwarning" aria-label="Permalink to &quot;`hooks.limitWarning`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[DanmakuType, number]&gt;</code></strong></p><p>The <code>limitWarning</code> hook is triggered when the memory danmaku capacity threshold is exceeded. If you do not set this hook, a warning will be thrown in the console. If you want to cancel the console warning, you can add this hook to handle it yourself.</p><h2 id="hooks-updateoptions" tabindex="-1"><code>hooks.updateOptions</code> <a class="header-anchor" href="#hooks-updateoptions" aria-label="Permalink to &quot;`hooks.updateOptions`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[Partial&lt;ManagerOptions&gt;]&gt;</code></strong></p><p>The <code>updateOptions</code> hook is triggered when the configuration is updated. It is only triggered when calling <code>manager.updateOptions()</code>. You can use this hook to access the new configuration.</p><div class="note custom-block github-alert"><p class="custom-block-title">Tip</p><p>In fact, many methods for changing configurations, such as <code>manager.setRate</code>, internally call the <code>manager.updateOptions()</code> method, which also triggers this hook.</p></div>',65),t=[o];function h(r,l,d,k,p,c){return a(),e("div",null,t)}const E=s(n,[["render",h]]);export{u as __pageData,E as default};
