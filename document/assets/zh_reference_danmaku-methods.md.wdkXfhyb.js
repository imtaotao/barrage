import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DKWfLnao.js";const c=JSON.parse('{"title":"弹幕 API","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/danmaku-methods.md","filePath":"zh/reference/danmaku-methods.md","lastUpdated":1724229189000}'),e={name:"zh/reference/danmaku-methods.md"},t=n(`<h1 id="弹幕-api" tabindex="-1">弹幕 API <a class="header-anchor" href="#弹幕-api" aria-label="Permalink to &quot;弹幕 API&quot;">​</a></h1><p>弹幕实例有一些方法供你使用，你可用用他们来做一些行为，或者获取当前弹幕的一些状态数据。下面是一个示例：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 点击弹幕的时候会销毁弹幕</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DanmakuComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        props.danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {props.danmaku.data.value}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将组件渲染到弹幕的内置节点上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.node).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DanmakuComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{danmaku} /&gt;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="danmaku-hide" tabindex="-1"><code>danmaku.hide()</code> <a class="header-anchor" href="#danmaku-hide" aria-label="Permalink to &quot;\`danmaku.hide()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将当前弹幕实例设置为隐藏状态，实际上是设置 <code>visibility: hidden</code>，会调用 <code>hide</code> 钩子。</p><h2 id="danmaku-show" tabindex="-1"><code>danmaku.show()</code> <a class="header-anchor" href="#danmaku-show" aria-label="Permalink to &quot;\`danmaku.show()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将当前弹幕实例从隐藏状态恢复显示，会调用 <code>show</code> 钩子。</p><h2 id="danmaku-pause" tabindex="-1"><code>danmaku.pause()</code> <a class="header-anchor" href="#danmaku-pause" aria-label="Permalink to &quot;\`danmaku.pause()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将当前正在运动状态的弹幕实例暂停，会调用 <code>pause</code> 钩子。</p><h2 id="danmaku-resume" tabindex="-1"><code>danmaku.resume()</code> <a class="header-anchor" href="#danmaku-resume" aria-label="Permalink to &quot;\`danmaku.resume()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将当前正在暂停状态的弹幕实例恢复运动，会调用 <code>resume</code> 钩子。</p><h2 id="danmaku-setloop" tabindex="-1"><code>danmaku.setloop()</code> <a class="header-anchor" href="#danmaku-setloop" aria-label="Permalink to &quot;\`danmaku.setloop()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将弹幕实例设置为循环播放状态。</p><h2 id="danmaku-unloop" tabindex="-1"><code>danmaku.unloop()</code> <a class="header-anchor" href="#danmaku-unloop" aria-label="Permalink to &quot;\`danmaku.unloop()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>将弹幕实例从循环播放状态取消。</p><h2 id="danmaku-destroy" tabindex="-1"><code>danmaku.destroy()</code> <a class="header-anchor" href="#danmaku-destroy" aria-label="Permalink to &quot;\`danmaku.destroy()\`&quot;">​</a></h2><p><strong>类型：<code>(mark?: unknown) =&gt; void</code></strong></p><p>将当前弹幕实例从容器中销毁，并从内存中移除，会调用 <code>destroy</code> 钩子，你也可以尝试传递 <code>mark</code> 标识符，引擎内置的 destroy 行为是不会传递标识符的。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $moveEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="danmaku-setstyle" tabindex="-1"><code>danmaku.setStyle()</code> <a class="header-anchor" href="#danmaku-setstyle" aria-label="Permalink to &quot;\`danmaku.setStyle()\`&quot;">​</a></h2><p><strong>类型：<code>(key: StyleKey, val: CSSStyleDeclaration[StyleKey]) =&gt; void</code></strong></p><p>设置当前弹幕实例内置节点的 <code>CSS</code> 样式。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将内置弹幕节点的背景色改为红色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;background&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="danmaku-getwidth" tabindex="-1"><code>danmaku.getWidth()</code> <a class="header-anchor" href="#danmaku-getwidth" aria-label="Permalink to &quot;\`danmaku.getWidth()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; number</code></strong></p><p><code>getWidth()</code> 将返回弹幕实例自身的宽度，同样的在你发送高级弹幕的时候会很有用。</p><h2 id="danmaku-getheight" tabindex="-1"><code>danmaku.getHeight()</code> <a class="header-anchor" href="#danmaku-getheight" aria-label="Permalink to &quot;\`danmaku.getHeight()\`&quot;">​</a></h2><p><strong>类型：<code>() =&gt; number</code></strong></p><p><code>getHeight()</code> 将返回弹幕实例自身的高度，这在你发送高级弹幕的时候计算 <code>position</code> 的时候会很有用。</p><h2 id="danmaku-updateduration" tabindex="-1"><code>danmaku.updateDuration()</code> <a class="header-anchor" href="#danmaku-updateduration" aria-label="Permalink to &quot;\`danmaku.updateDuration()\`&quot;">​</a></h2><p><strong>类型：<code>(duration: number) =&gt; void</code></strong></p><p><code>updateDuration()</code> 用于更新弹幕实例的运动时间，一般情况下这个方法供内部的渲染引擎使用。</p><h2 id="danmaku-remove" tabindex="-1"><code>danmaku.remove()</code> <a class="header-anchor" href="#danmaku-remove" aria-label="Permalink to &quot;\`danmaku.remove()\`&quot;">​</a></h2><p><strong>类型：<code>(pluginName: string) =&gt; void</code></strong></p><p>移除当前弹幕实例的某个插件，但是必须指定插件名字。</p><h2 id="danmaku-use" tabindex="-1"><code>danmaku.use()</code> <a class="header-anchor" href="#danmaku-use" aria-label="Permalink to &quot;\`danmaku.use()\`&quot;">​</a></h2><p><strong>类型：<code>(plugin: DanmakuPlugin&lt;T&gt; | ((b: this) =&gt; DanmakuPlugin&lt;T&gt;)) =&gt; DanmakuPlugin&lt;T&gt; &amp; { name: string }</code></strong></p><p>给当前弹幕实例注册一个插件，返回插件实例，如果你在后续需要移除插件，可以保存插件的 <code>name</code>，如果不传会默认分别一个 <code>uuid</code> 形式的 <code>name</code>。</p><p><strong>如果传了 <code>name</code>：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test-plugin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plugin.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;test-plugin&#39;</span></span></code></pre></div><p><strong>如果不传 <code>name</code>：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plugin.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// uuid</span></span></code></pre></div>`,48),h=[t];function l(p,k,d,o,r,E){return i(),a("div",null,h)}const u=s(e,[["render",l]]);export{c as __pageData,u as default};
