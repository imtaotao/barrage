import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DKWfLnao.js";const g=JSON.parse('{"title":"Track API","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/track-api.md","filePath":"en/reference/track-api.md","lastUpdated":1738341151000}'),t={name:"en/reference/track-api.md"},e=n(`<h1 id="track-api" tabindex="-1">Track API <a class="header-anchor" href="#track-api" aria-label="Permalink to &quot;Track API&quot;">​</a></h1><p>The Track class represents the API related to tracks. You can obtain an instance of a track by using <a href="./manager-api.html#manager-gettrack"><strong><code>manager.getTrack(i)</code></strong></a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="track-width" tabindex="-1">track.width <a class="header-anchor" href="#track-width" aria-label="Permalink to &quot;track.width&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br></p><p>The width of the track, which may change after you call <code>manager.format()</code>.</p><h2 id="track-height" tabindex="-1">track.height <a class="header-anchor" href="#track-height" aria-label="Permalink to &quot;track.height&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br></p><p>The height of the track, which may change after you call <code>manager.format()</code>.</p><h2 id="track-index" tabindex="-1">track.index <a class="header-anchor" href="#track-index" aria-label="Permalink to &quot;track.index&quot;">​</a></h2><p><strong>Type: <code>number</code></strong><br></p><p>The position of this track in the track list of the current container. For example, if index is 1, it represents the second track in the list.</p><h2 id="track-islock" tabindex="-1">track.isLock <a class="header-anchor" href="#track-islock" aria-label="Permalink to &quot;track.isLock&quot;">​</a></h2><p><strong>Type: <code>boolean</code></strong><br><strong>Default Value: <code>false</code></strong></p><p>Used to determine if the current track is locked.</p><h2 id="track-list" tabindex="-1">track.list <a class="header-anchor" href="#track-list" aria-label="Permalink to &quot;track.list&quot;">​</a></h2><p><strong>Type: <code>Array&lt;FacileDanmaku&lt;T&gt;</code></strong></p><p>The list of facile danmaku within this track. If you need to iterate over the list, it is recommended to use the <code>track.each()</code> method.</p><h2 id="track-location" tabindex="-1">track.location <a class="header-anchor" href="#track-location" aria-label="Permalink to &quot;track.location&quot;">​</a></h2><p><strong>Type: <code>Location</code></strong></p><p>This attribute represents the height-related position information of the track, measured in <code>px</code>. It is calculated based on the container, and changes when the container is formatted. This property can be especially useful when you need to send a flexible danmaku to a specific track.</p><div class="note custom-block github-alert"><p class="custom-block-title">Tips</p><p></p><ol><li>If you can determine the height of the danmaku without needing to calculate it, you don’t need to use the <code>getHeight()</code> method.</li><li>Ensure that the track you are accessing exists, otherwise it will throw an error. You can check how many tracks are available using <code>manager.trackCount</code>.</li><li>When rendering flexible danmaku as shown in the following example, the danmaku itself is not constrained by the track; it is merely rendered at a track&#39;s location. Therefore, calling <code>track.lock()</code> on a track will not affect the flexible danmaku.</li><li>You can try this code in our online <a href="https://imtaotao.github.io/danmu/" target="_blank" rel="noreferrer"><strong>demo</strong></a> by opening your browser&#39;s console and entering the code to see the effects.</li></ol></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Send a flexible danmaku</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushFlexibleDanmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;content&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Render in the fourth track</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTrack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).location;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        x: (container.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        y: middle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="track-lock" tabindex="-1">track.lock() <a class="header-anchor" href="#track-lock" aria-label="Permalink to &quot;track.lock()&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Used to lock the current track. Once the track is locked, no new danmaku will be sent on this track.</p><h2 id="track-unlock" tabindex="-1">track.unlock() <a class="header-anchor" href="#track-unlock" aria-label="Permalink to &quot;track.unlock()&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Unlocks the current track.</p><h2 id="track-clear" tabindex="-1">track.clear() <a class="header-anchor" href="#track-clear" aria-label="Permalink to &quot;track.clear()&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Clears all danmaku within the current track, but does not prevent subsequent danmaku from being sent.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// If you need to clear the track and prevent further danmaku</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> track</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTrack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">track.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">track.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="track-each" tabindex="-1">track.each() <a class="header-anchor" href="#track-each" aria-label="Permalink to &quot;track.each()&quot;">​</a></h2><p><strong>Type: <code>(fn: (danmaku: FacileDanmaku&lt;T&gt;) =&gt; unknown | boolean) =&gt; void</code></strong></p><p>Iterates over <code>track.list</code>. It is advised to use this method when you need to destroy individual danmaku. Returning <code>false</code> from the callback function will prevent further iterations.</p>`,36),h=[e];function k(l,p,r,d,c,o){return a(),i("div",null,h)}const y=s(t,[["render",k]]);export{g as __pageData,y as default};
