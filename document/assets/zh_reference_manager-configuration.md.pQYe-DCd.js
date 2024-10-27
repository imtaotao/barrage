import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"manager 配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/manager-configuration.md","filePath":"zh/reference/manager-configuration.md","lastUpdated":1730016627000}'),t={name:"zh/reference/manager-configuration.md"},e=n(`<h1 id="manager-配置" tabindex="-1">manager 配置 <a class="header-anchor" href="#manager-配置" aria-label="Permalink to &quot;manager 配置&quot;">​</a></h1><p>在初始化 <code>manager</code> 的时候，允许传递全局 options，替换默认的配置。以下所有的配置都是<strong>可选的</strong>。</p><div class="note custom-block github-alert"><p class="custom-block-title">注意</p><p>这里的是全局属性，在发送弹幕的时候如果一些可选属性没有传递，<strong>会默认取这里的全局属性</strong>。</p></div><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  rate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  interval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  gap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  durationRange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trackHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ManagerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  limits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    stash</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  direction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;none&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;strict&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;adaptive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Manager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>除了 <code>plugin</code>，所有的参数都可以通过在<strong>创建 <code>manager</code> 的时候设置</strong>或者<strong>通过 api 来更改</strong>。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 在初始化的时候设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ rate: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 通过 api 来更改</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="config-mode" tabindex="-1"><code>config.mode</code> <a class="header-anchor" href="#config-mode" aria-label="Permalink to &quot;\`config.mode\`&quot;">​</a></h2><p><strong>类型：<code>&#39;none&#39; | &#39;strict&#39; | &#39;adaptive&#39;</code></strong><br><strong>默认值：<code>&#39;strict&#39;</code></strong></p><p>用来确定内核的<strong>碰撞检测算法</strong>。<strong>如果你的业务场景是直播或者视频播放，你应该设置为 <code>adaptive</code>，这样在满足实时渲染的前提下，尽可能的不发生弹幕碰撞。</strong></p><ul><li><strong><code>none</code></strong> 不会有任何碰撞检测，弹幕会立即渲染。</li><li><strong><code>strict</code></strong> 会进行严格的碰撞检测，如果不满足条件则会推迟渲染。</li><li><strong><code>adaptive</code></strong> 在满足立即渲染的前提下，会尽力进行碰撞检测（推荐）。</li></ul><h2 id="config-rate" tabindex="-1"><code>config.rate</code> <a class="header-anchor" href="#config-rate" aria-label="Permalink to &quot;\`config.rate\`&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br><strong>默认值：<code>1</code></strong></p><p>用来设置设置弹幕的运动速率，弹幕的原始运动速度会乘以 <code>rate</code> 这个系数。</p><h2 id="config-gap" tabindex="-1"><code>config.gap</code> <a class="header-anchor" href="#config-gap" aria-label="Permalink to &quot;\`config.gap\`&quot;">​</a></h2><p><strong>类型：<code>number | string</code></strong><br><strong>默认值：<code>0</code></strong></p><p>同一条轨道在碰撞检测的啥情况下，后一条弹幕与前一条弹幕最小相隔的距离。<strong>不能设置一个小于 <code>0</code> 的值，如果传递的是 <code>string</code> 类型则代表是百分比，但是必须是 <code>10%</code> 这种语法</strong>， 仅当弹幕命中了碰撞检测的时候才会生效。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最小间距为 100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最小间距为容器宽度的 10%</span></span></code></pre></div><h2 id="config-interval" tabindex="-1"><code>config.interval</code> <a class="header-anchor" href="#config-interval" aria-label="Permalink to &quot;\`config.interval\`&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br><strong>默认值：<code>500</code></strong></p><p>内核轮询渲染的频率，默认为 <code>500ms</code> 一次，你可以根据业务现实情况调整为一个合适的值。其实就是 <code>setTimeout</code> 的时间。</p><h2 id="config-direction" tabindex="-1"><code>config.direction</code> <a class="header-anchor" href="#config-direction" aria-label="Permalink to &quot;\`config.direction\`&quot;">​</a></h2><p><strong>类型：<code>string</code></strong><br><strong>默认值：<code>&#39;right&#39;</code></strong></p><p>弹幕的运动方向，默认从右往左运动，<strong>普通弹幕没有 <code>none</code> 值，高级弹幕可以设置 <code>none</code> 值</strong>。如果发送弹幕的时候有自己的 <code>direction</code>，则会取弹幕自身的配置。</p><h2 id="config-trackheight" tabindex="-1"><code>config.trackHeight</code> <a class="header-anchor" href="#config-trackheight" aria-label="Permalink to &quot;\`config.trackHeight\`&quot;">​</a></h2><p><strong>类型：<code>number | string</code></strong><br><strong>默认值：<code>&#39;20%&#39;</code></strong></p><p>轨道高度，如果传入的值为 <code>number</code> 类型，则默认是 <code>px</code>，如果传递是 <code>string</code> 类型，必须是 <code>10%</code> 这种语法，代表基于容器的百分比高度。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTrackHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 高度为 100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTrackHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;33%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 高度为容器高度的 33%</span></span></code></pre></div><h2 id="config-durationrange" tabindex="-1"><code>config.durationRange</code> <a class="header-anchor" href="#config-durationrange" aria-label="Permalink to &quot;\`config.durationRange\`&quot;">​</a></h2><p><strong>类型：<code>[number, number]</code></strong><br><strong>默认值：<code>[4000, 6000]</code></strong></p><p>普通弹幕的运动时间，这是一个范围值，<strong>普通弹幕会在这个范围内随机选择一个时间作为运动时间</strong>，如果你希望所有的弹幕运动时间都一致，你可以将两个数设置为同样的数。如果发送弹幕的时候有自己的 <code>duration</code>，则会取弹幕自身的配置。</p><h2 id="config-limits" tabindex="-1"><code>config.limits</code> <a class="header-anchor" href="#config-limits" aria-label="Permalink to &quot;\`config.limits\`&quot;">​</a></h2><p><strong>类型：<code>{ view?: number; stash?: number }</code></strong><br><strong>默认值：<code>{ stash: Infinity }</code></strong></p><div class="note custom-block github-alert"><p class="custom-block-title">提示</p><p>这个参数会限制弹幕渲染的数量，内存和视图的<strong>默认值都是不限制</strong>。</p></div><ul><li><code>view</code> 限制渲染在容器中的弹幕数量，如果超过了此限制，普通弹幕会放在内存中，等待合适的时机渲染，高级弹幕会直接丢弃。</li><li><code>stash</code> 限制存放在内存中的弹幕数量，如果超过此限制则会被丢弃，并触发告警或调用插件钩子，你可以适当调整此参数。</li></ul><h2 id="config-plugin" tabindex="-1"><code>config.plugin</code> <a class="header-anchor" href="#config-plugin" aria-label="Permalink to &quot;\`config.plugin\`&quot;">​</a></h2><p><strong>类型：<code>ManagerPlugin&lt;unknown&gt; | Array&lt;ManagerPlugin&lt;unknown&gt;&gt;</code></strong><br><strong>默认值：<code>undefined</code></strong></p><p>创建 <code>manager</code> 的时候默认的 <code>managerPlugin</code>，如果你需要注册新插件可以使用 <code>manager.use</code> 方法。详情可见 <a href="./manager-hooks.html"><strong>manager 钩子</strong></a> 和 <a href="./../guide/create-plugin.html"><strong>编写插件</strong></a> 这两章。</p><p><strong>示例：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>以数组类型传递：</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 你也可以传递为一个数组，方便你添加其他插件时控制顺序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,45),h=[e];function p(l,k,r,o,d,g){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{E as __pageData,y as default};
