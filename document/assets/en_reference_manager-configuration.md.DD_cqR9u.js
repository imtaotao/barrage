import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"Manager Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/manager-configuration.md","filePath":"en/reference/manager-configuration.md","lastUpdated":1729925308000}'),e={name:"en/reference/manager-configuration.md"},t=n(`<h1 id="manager-configuration" tabindex="-1">Manager Configuration <a class="header-anchor" href="#manager-configuration" aria-label="Permalink to &quot;Manager Configuration&quot;">​</a></h1><p>When initializing the <code>manager</code>, you can pass global options to override the default configuration. All of the following options are <strong>optional</strong>.</p><div class="note custom-block github-alert"><p class="custom-block-title">Tip</p><p>These are global properties. When sending danmaku, if some optional properties are not provided, <strong>the global properties here will be used by default</strong>.</p></div><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
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
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Manager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Except for <code>plugin</code>, all parameters can be set either <strong>when creating the <code>manager</code></strong> or <strong>through the API</strong>.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. Set during initialization</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ rate: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. Change through the API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="config-mode" tabindex="-1"><code>config.mode</code> <a class="header-anchor" href="#config-mode" aria-label="Permalink to &quot;\`config.mode\`&quot;">​</a></h2><p><strong>Type: <code>&#39;none&#39; | &#39;strict&#39; | &#39;adaptive&#39;</code></strong><br><strong>Default: <code>&#39;strict&#39;</code></strong></p><p>Used to determine the kernel&#39;s <strong>collision detection algorithm</strong>. <strong>If your use case is live streaming or video playback, you should set it to <code>adaptive</code>. This will minimize danmaku collisions while ensuring real-time rendering.</strong></p><ul><li><strong><code>none</code></strong> No collision detection; danmaku will render immediately.</li><li><strong><code>strict</code></strong> Strict collision detection; rendering will be delayed if conditions are not met.</li><li><strong><code>adaptive</code></strong> Attempts collision detection while ensuring immediate rendering (recommended).</li></ul><h2 id="config-rate" tabindex="-1"><code>config.rate</code> <a class="header-anchor" href="#config-rate" aria-label="Permalink to &quot;\`config.rate\`&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br><strong>Default: <code>1</code></strong></p><p>Used to set the movement speed of the danmaku. The original movement speed of the danmaku will be multiplied by this <code>rate</code> factor.</p><h2 id="config-gap" tabindex="-1"><code>config.gap</code> <a class="header-anchor" href="#config-gap" aria-label="Permalink to &quot;\`config.gap\`&quot;">​</a></h2><p><strong>Type: <code>number | string</code></strong><br><strong>Default: <code>0</code></strong></p><p>The minimum distance between the trailing danmaku and the leading danmaku on the same track during collision detection. <strong>You cannot set a value less than <code>0</code>. If a <code>string</code> type is passed, it represents a percentage, but it must follow the <code>10%</code> syntax</strong>. This only takes effect when the danmaku hits collision detection.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Minimum distance is 100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// // Minimum distance is 10% of the container width</span></span></code></pre></div><h2 id="config-interval" tabindex="-1"><code>config.interval</code> <a class="header-anchor" href="#config-interval" aria-label="Permalink to &quot;\`config.interval\`&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br><strong>Default: <code>500</code></strong></p><p>The frequency of the kernel&#39;s polling for rendering, defaulting to once every <code>500ms</code>. You can adjust this to an appropriate value based on your business requirements. Essentially, this is the <code>setTimeout</code> interval.</p><h2 id="config-direction" tabindex="-1"><code>config.direction</code> <a class="header-anchor" href="#config-direction" aria-label="Permalink to &quot;\`config.direction\`&quot;">​</a></h2><p><strong>Type: <code>string</code></strong><br><strong>Default: <code>&#39;right&#39;</code></strong></p><p>The movement direction of the danmaku, which defaults to moving from right to left. <strong>Regular danmaku cannot have a <code>none</code> value, but advanced danmaku can be set to <code>none</code></strong>. If a danmaku has its own <code>direction</code> when sent, it will use its own configuration.</p><h2 id="config-trackheight" tabindex="-1"><code>config.trackHeight</code> <a class="header-anchor" href="#config-trackheight" aria-label="Permalink to &quot;\`config.trackHeight\`&quot;">​</a></h2><p><strong>Type: <code>number | string</code></strong><br><strong>Default: <code>&#39;20%&#39;</code></strong></p><p>Track height. If the value passed is of type <code>number</code>, it defaults to <code>px</code>. If the value passed is of type <code>string</code>, it must follow the <code>10%</code> syntax, representing a percentage height based on the container.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTrackHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Height is 100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTrackHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;33%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Height is 33% of the container height</span></span></code></pre></div><h2 id="config-durationrange" tabindex="-1"><code>config.durationRange</code> <a class="header-anchor" href="#config-durationrange" aria-label="Permalink to &quot;\`config.durationRange\`&quot;">​</a></h2><p><strong>Type: <code>[number, number]</code></strong><br><strong>Default: <code>[4000, 6000]</code></strong></p><p>The movement duration for regular danmaku. This is a range value, and <strong>regular danmaku will randomly choose a time within this range as the movement duration</strong>. If you want all danmaku to have the same movement duration, you can set both numbers to the same value. If a danmaku has its own <code>duration</code> when sent, it will use its own configuration.</p><h2 id="config-limits" tabindex="-1"><code>config.limits</code> <a class="header-anchor" href="#config-limits" aria-label="Permalink to &quot;\`config.limits\`&quot;">​</a></h2><p><strong>Type: <code>{ view?: number; stash?: number }</code></strong><br><strong>Default: <code>{ stash: Infinity }</code></strong></p><div class="note custom-block github-alert"><p class="custom-block-title">Tip</p><p>This parameter limits the number of danmaku rendered, with the default values for both memory and view being <strong>unlimited</strong>.</p></div><ul><li><p><code>view</code> limits the number of danmaku rendered in the container. If this limit is exceeded, regular danmaku will be stored in memory, waiting for an appropriate time to render, while advanced danmaku will be discarded.</p></li><li><p><code>stash</code> limits the number of danmaku stored in memory. If this limit is exceeded, they will be discarded and an alert will be triggered or a plugin hook will be called. You can adjust this parameter as needed.</p></li></ul><h2 id="config-plugin" tabindex="-1"><code>config.plugin</code> <a class="header-anchor" href="#config-plugin" aria-label="Permalink to &quot;\`config.plugin\`&quot;">​</a></h2><p><strong>Type: <code>ManagerPlugin&lt;unknown&gt; | Array&lt;ManagerPlugin&lt;unknown&gt;&gt;</code></strong><br><strong>Default: <code>undefined</code></strong></p><p>The default <code>managerPlugin</code> when creating a <code>manager</code>. If you need to register new plugins, you can use the <code>manager.use</code> method. For more details, refer to the <a href="./manager-hooks.html"><strong>manager hooks</strong></a> and <a href="./../guide/create-plugin.html"><strong>writing plugins</strong></a> sections.</p><p><strong>Example:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>Pass as an array:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// You can also pass it as an array,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// which allows you to control the order when adding other plugins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,45),l=[t];function h(p,r,o,k,d,g){return a(),i("div",null,l)}const u=s(e,[["render",h]]);export{E as __pageData,u as default};
