import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"manager 钩子","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/manager-hooks.md","filePath":"zh/reference/manager-hooks.md","lastUpdated":1725438931000}'),n={name:"zh/reference/manager-hooks.md"},o=e('<h1 id="manager-钩子" tabindex="-1">manager 钩子 <a class="header-anchor" href="#manager-钩子" aria-label="Permalink to &quot;manager 钩子&quot;">​</a></h1><p>manager 的钩子包含 <code>manager</code> 自身的钩子和 <code>弹幕</code> 的钩子。</p><div class="note custom-block github-alert"><p class="custom-block-title">注意</p><p></p><ol><li>弹幕钩子和全局钩子以 <strong><code>$</code></strong> 前缀作为区分。</li><li>这里只会介绍 <code>manager</code> <strong>自身的钩子</strong>，因为弹幕钩子会在<a href="./danmaku-hooks.html"><strong>弹幕钩子章节</strong></a>介绍。</li></ol></div><h2 id="_1-创建-manager-时注册" tabindex="-1">1. 创建 <code>manager</code> 时注册 <a class="header-anchor" href="#_1-创建-manager-时注册" aria-label="Permalink to &quot;1. 创建 `manager` 时注册&quot;">​</a></h2><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="_2-通过-manager-use-来注册" tabindex="-1">2. 通过 <code>manager.use</code> 来注册 <a class="header-anchor" href="#_2-通过-manager-use-来注册" aria-label="Permalink to &quot;2. 通过 `manager.use` 来注册&quot;">​</a></h2><p><a href="./manager-api/#manager-use"><strong><code>manager.use()</code></strong></a> 是用来注册插件的 api，如果你有外部插件或者自己编写的插件可用，也可以通过此方法来注册。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-init" tabindex="-1"><code>hooks.init</code> <a class="header-anchor" href="#hooks-init" aria-label="Permalink to &quot;`hooks.init`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[manager: Manager&lt;T&gt;]&gt;</code></strong></p><p><code>init</code> 钩子会在创建 <code>manager</code> 的时候触发，一般情况下只有当你通过 <code>create</code> 方法创建 <code>manager</code> 的时候才会用到，这只是一个语法糖让你方便拿到 <code>manager</code> 实例。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">manager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-push" tabindex="-1"><code>hooks.push</code> <a class="header-anchor" href="#hooks-push" aria-label="Permalink to &quot;`hooks.push`&quot;">​</a></h2><p><strong>Type: <code>SyncHook&lt;[PushData | Danmaku&lt;PushData&gt;, DanmakuType, boolean]&gt;</code></strong></p><p><code>push</code> 钩子会在发送弹幕的时候触发，调用 <code>manager.push()</code>，<code>manager.unshift()</code>，和 <code>manager.pushFlexibleDanmaku()</code> 的时候都会触发，你可以在此钩子拿到将要发送的弹幕数据，弹幕类型，是否是 <code>unshift</code> 等。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">isUnshift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 处理高级弹幕</span></span>\n<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;flexible&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="hooks-start" tabindex="-1"><code>hooks.start</code> <a class="header-anchor" href="#hooks-start" aria-label="Permalink to &quot;`hooks.start`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>start</code> 钩子会在渲染引擎启动的时候触发，调用 <code>manager.startPlaying()</code> 的时候才会触发。</p><h2 id="hooks-stop" tabindex="-1"><code>hooks.stop</code> <a class="header-anchor" href="#hooks-stop" aria-label="Permalink to &quot;`hooks.stop`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>stop</code> 钩子会在渲染引擎关闭的时候触发，调用 <code>manager.stopPlaying()</code> 的时候才会触发。</p><h2 id="hooks-show" tabindex="-1"><code>hooks.show</code> <a class="header-anchor" href="#hooks-show" aria-label="Permalink to &quot;`hooks.show`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>show</code> 钩子会在批量将弹幕从隐藏状态改为显示状态的时候触发，调用 <code>manager.show()</code> 的时候才会触发。</p><h2 id="hooks-hide" tabindex="-1"><code>hooks.hide</code> <a class="header-anchor" href="#hooks-hide" aria-label="Permalink to &quot;`hooks.hide`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>hide</code> 钩子会在批量将弹幕隐藏的时候触发，调用 <code>manager.hide()</code> 的时候才会触发。</p><h2 id="hooks-clear" tabindex="-1"><code>hooks.clear</code> <a class="header-anchor" href="#hooks-clear" aria-label="Permalink to &quot;`hooks.clear`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>clear</code> 钩子会在清空当前渲染和内存中的弹幕和弹幕数据的时候触发，调用 <code>manager.clear()</code> 的时候才会触发。</p><h2 id="hooks-mount" tabindex="-1"><code>hooks.mount</code> <a class="header-anchor" href="#hooks-mount" aria-label="Permalink to &quot;`hooks.mount`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[HTMLElement]&gt;</code></strong></p><p><code>mount</code> 钩子会在将容器挂载到指定 <code>DOM</code> 节点的时候触发，你可以在钩子里面拿到挂载的节点，调用 <code>manager.mount()</code> 的时候才会触发。</p><h2 id="hooks-unmount" tabindex="-1"><code>hooks.unmount</code> <a class="header-anchor" href="#hooks-unmount" aria-label="Permalink to &quot;`hooks.unmount`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[HTMLElement | null]&gt;</code></strong></p><p><code>unmount</code> 钩子会在将容器从当前挂载的节点卸载的时候触发，你可以在钩子里面拿到将要卸载的节点，如果有的话，调用 <code>manager.unmount()</code> 的时候才会触发。</p><h2 id="hooks-freeze" tabindex="-1"><code>hooks.freeze</code> <a class="header-anchor" href="#hooks-freeze" aria-label="Permalink to &quot;`hooks.freeze`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>freeze</code> 钩子会在冻结当前渲染的弹幕的时候触发，调用 <code>manager.freeze()</code> 的时候才会触发。</p><h2 id="hooks-unfreeze" tabindex="-1"><code>hooks.unfreeze</code> <a class="header-anchor" href="#hooks-unfreeze" aria-label="Permalink to &quot;`hooks.unfreeze`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>unfreeze</code> 钩子会在当前弹幕从冻结解除时候触发，调用 <code>manager.unfreeze()</code> 的时候才会触发。</p><h2 id="hooks-format" tabindex="-1"><code>hooks.format</code> <a class="header-anchor" href="#hooks-format" aria-label="Permalink to &quot;`hooks.format`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>format</code> 钩子会在容器格式化的时候触发，调用 <code>manager.format()</code> 手动格式化的时候才会触发。</p><h2 id="hooks-render" tabindex="-1"><code>hooks.render</code> <a class="header-anchor" href="#hooks-render" aria-label="Permalink to &quot;`hooks.render`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[DanmakuType]&gt;</code></strong></p><p><code>render</code> 钩子会在每一次轮询渲染的时候触发。</p><h2 id="hooks-willrender" tabindex="-1"><code>hooks.willRender</code> <a class="header-anchor" href="#hooks-willrender" aria-label="Permalink to &quot;`hooks.willRender`&quot;">​</a></h2><p><strong>类型：<code>SyncWaterfallHook&lt;RenderData&gt;</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RenderData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DanmakuType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prevent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trackIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>willRender</code> 钩子会在弹幕即将要进入渲染队列的时候触发，你可以在此钩子阻止弹幕渲染，这对于通过<strong>关键字</strong>或者<strong>轨道 index</strong> 来过滤弹幕的功能实现很有用。</p><h2 id="hooks-finished" tabindex="-1"><code>hooks.finished</code> <a class="header-anchor" href="#hooks-finished" aria-label="Permalink to &quot;`hooks.finished`&quot;">​</a></h2><p><strong>类型：<code>SyncHook</code></strong></p><p><code>finished</code> 钩子会在当前内存中的所有弹幕渲染完毕的时候触发，但是不代表以后就不会渲染弹幕了，因为你还可能继续在发送新的弹幕。</p><h2 id="hooks-limitwarning" tabindex="-1"><code>hooks.limitWarning</code> <a class="header-anchor" href="#hooks-limitwarning" aria-label="Permalink to &quot;`hooks.limitWarning`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[DanmakuType, number]&gt;</code></strong></p><p><code>limitWarning</code> 钩子会在超过内存弹幕容量阈值的时候触发，如果你没有设置此钩子，则会在控制台抛出告警，如果你想取消控制台告警，可以自行添加此钩子处理。</p><h2 id="hooks-updateoptions" tabindex="-1"><code>hooks.updateOptions</code> <a class="header-anchor" href="#hooks-updateoptions" aria-label="Permalink to &quot;`hooks.updateOptions`&quot;">​</a></h2><p><strong>类型：<code>SyncHook&lt;[Partial&lt;ManagerOptions&gt;]&gt;</code></strong></p><p><code>updateOptions</code> 钩子会在更新配置的时候触发，调用 <code>manager.updateOptions()</code> 的时候才会触发，你可以在此钩子拿到新的配置。</p><div class="note custom-block github-alert"><p class="custom-block-title">注意事项</p><p>实际上很多更改配置的方法，例如 <code>manager.setRate</code> 等，底层都是调用的 <code>manager.updateOptions()</code> 方法，也是会触发此钩子的。</p></div>',65),t=[o];function h(l,p,k,d,r,c){return i(),a("div",null,t)}const u=s(n,[["render",h]]);export{E as __pageData,u as default};
