import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DKWfLnao.js";const g=JSON.parse('{"title":"轨道 API","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/track-api.md","filePath":"zh/reference/track-api.md","lastUpdated":1735270220000}'),t={name:"zh/reference/track-api.md"},h=n(`<h1 id="轨道-api" tabindex="-1">轨道 API <a class="header-anchor" href="#轨道-api" aria-label="Permalink to &quot;轨道 API&quot;">​</a></h1><p>Track 类是轨道相关的 api，你可以通过 <a href="./manager-api.html#manager-gettrack"><strong><code>manager.getTrack(i)</code></strong></a> 来获取某一条轨道实例。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  top</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  middle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  bottom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Track</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  isLock</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FacileDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  unlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  each</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FacileDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="track-width" tabindex="-1">track.width <a class="header-anchor" href="#track-width" aria-label="Permalink to &quot;track.width&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br></p><p>轨道的宽度，当你调用 <code>manager.format()</code> 后，这个值可能会有变化。</p><h2 id="track-height" tabindex="-1">track.height <a class="header-anchor" href="#track-height" aria-label="Permalink to &quot;track.height&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br></p><p>轨道的高度，当你调用 <code>manager.format()</code> 后，这个值可能会有变化。</p><h2 id="track-index" tabindex="-1">track.index <a class="header-anchor" href="#track-index" aria-label="Permalink to &quot;track.index&quot;">​</a></h2><p><strong>类型：<code>number</code></strong><br></p><p>再当前容器的轨道列表中，当前这条轨道所在的坐标，例如 index 为 1，则代表是当前容器轨道列表中的第 2 条轨道。</p><h2 id="track-islock" tabindex="-1">track.isLock <a class="header-anchor" href="#track-islock" aria-label="Permalink to &quot;track.isLock&quot;">​</a></h2><p><strong>类型：<code>boolean</code></strong><br><strong>默认值：<code>false</code></strong></p><p>用来判断当前这条轨道是否被锁定。</p><h2 id="track-list" tabindex="-1">track.list <a class="header-anchor" href="#track-list" aria-label="Permalink to &quot;track.list&quot;">​</a></h2><p><strong>类型：<code>Array&lt;FacileDanmaku&lt;T&gt;</code></strong></p><p>当前这条轨道内部的弹幕列表，如果你要对列表进行循环，建议使用 track.each() 方法。</p><h2 id="track-location" tabindex="-1">track.location <a class="header-anchor" href="#track-location" aria-label="Permalink to &quot;track.location&quot;">​</a></h2><p><strong>类型：<code>Location</code></strong></p><p>当前这条轨道高度相关位置信息，<strong>单位为 <code>px</code></strong>, 他是基于容器来计算的，当容器 format 之后，此熟悉也会跟着变化，当你发送高级弹幕的时候如果需要将其发送到某条轨道上，此属性可能会很有用。</p><div class="note custom-block github-alert"><p class="custom-block-title">提示</p><p></p><ol><li>对于弹幕的高度，如果你不需要通过计算就可以得到，则不需要通过 <code>getHeight()</code> 方法。</li><li>你要确保获取的轨道存在，否则会报错，可以通过 <code>manager.trackCount</code> 来判断当前总共有多少条轨道。</li><li>通过以下示例的方式渲染高级弹幕，实际上弹幕不会受到轨道的约束，只是渲染的位置在某条轨道上，所以当你对某条轨道调用了 <code>track.lock()</code>，并不会影响高级弹幕。</li><li>你可以在我们的在线 <a href="https://imtaotao.github.io/danmu/" target="_blank" rel="noreferrer"><strong>demo</strong></a> 打开浏览器控制台输入这段代码查看效果。</li></ol></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送一个高级弹幕</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushFlexibleDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;弹幕内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 渲染在第 4 条轨道中</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTrack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).location;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        x: (container.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        y: middle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="track-lock" tabindex="-1">track.lock() <a class="header-anchor" href="#track-lock" aria-label="Permalink to &quot;track.lock()&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>用于锁定当前轨道，当轨道被锁定之后，当前这条轨道将不会发送新的弹幕。</p><h2 id="track-unlock" tabindex="-1">track.unlock() <a class="header-anchor" href="#track-unlock" aria-label="Permalink to &quot;track.unlock()&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>解锁当前这条轨道</p><h2 id="track-clear" tabindex="-1">track.clear() <a class="header-anchor" href="#track-clear" aria-label="Permalink to &quot;track.clear()&quot;">​</a></h2><p><strong>类型：<code>() =&gt; void</code></strong></p><p>清空当前这条轨道内部所有的弹幕，但是不会阻止后续的弹幕发送。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果你需要清空并阻止后续的弹幕发送</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> track</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTrack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">track.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">track.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="track-each" tabindex="-1">track.each() <a class="header-anchor" href="#track-each" aria-label="Permalink to &quot;track.each()&quot;">​</a></h2><p><strong>类型：<code>(fn: (danmaku: FacileDanmaku&lt;T&gt;) =&gt; unknown | boolean) =&gt; void</code></strong></p><p>对 <code>track.list</code> 进行遍历，当你有对弹幕进行销毁的行为时，最好是使用此方法，回调函数返回 <code>false</code> 会阻止后续的遍历。</p>`,36),k=[h];function l(p,e,r,d,E,c){return a(),i("div",null,k)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
