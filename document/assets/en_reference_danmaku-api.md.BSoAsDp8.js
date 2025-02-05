import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DKWfLnao.js";const E=JSON.parse('{"title":"Danmaku API","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/danmaku-api.md","filePath":"en/reference/danmaku-api.md","lastUpdated":1738736732000}'),e={name:"en/reference/danmaku-api.md"},t=n(`<h1 id="danmaku-api" tabindex="-1">Danmaku API <a class="header-anchor" href="#danmaku-api" aria-label="Permalink to &quot;Danmaku API&quot;">​</a></h1><p>Danmaku instances have several methods available for you to use. You can use them to perform actions or retrieve some state data of the current danmaku. Here is an example:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Destroy the danmaku when it is clicked</span></span>
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
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Render the component onto the built-in node of the danmaku</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $createNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(danmaku.node).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DanmakuComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> danmaku</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{danmaku} /&gt;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="danmaku-hide" tabindex="-1"><code>danmaku.hide()</code> <a class="header-anchor" href="#danmaku-hide" aria-label="Permalink to &quot;\`danmaku.hide()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Set the current danmaku instance to a hidden state, which essentially sets <code>visibility: hidden</code> and triggers the <code>hide</code> hook.</p><h2 id="danmaku-show" tabindex="-1"><code>danmaku.show()</code> <a class="header-anchor" href="#danmaku-show" aria-label="Permalink to &quot;\`danmaku.show()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Restore the current danmaku instance from a hidden state to visible, which will trigger the <code>show</code> hook.</p><h2 id="danmaku-pause" tabindex="-1"><code>danmaku.pause()</code> <a class="header-anchor" href="#danmaku-pause" aria-label="Permalink to &quot;\`danmaku.pause()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Pause the current moving danmaku instance, which will trigger the <code>pause</code> hook.</p><h2 id="danmaku-resume" tabindex="-1"><code>danmaku.resume()</code> <a class="header-anchor" href="#danmaku-resume" aria-label="Permalink to &quot;\`danmaku.resume()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Resume the current paused danmaku instance, which will trigger the <code>resume</code> hook.</p><h2 id="danmaku-setloop" tabindex="-1"><code>danmaku.setloop()</code> <a class="header-anchor" href="#danmaku-setloop" aria-label="Permalink to &quot;\`danmaku.setloop()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Set the danmaku instance to loop playback mode.</p><h2 id="danmaku-unloop" tabindex="-1"><code>danmaku.unloop()</code> <a class="header-anchor" href="#danmaku-unloop" aria-label="Permalink to &quot;\`danmaku.unloop()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; void</code></strong></p><p>Cancel the loop playback mode for the danmaku instance.</p><h2 id="danmaku-destroy" tabindex="-1"><code>danmaku.destroy()</code> <a class="header-anchor" href="#danmaku-destroy" aria-label="Permalink to &quot;\`danmaku.destroy()\`&quot;">​</a></h2><p><strong>Type: <code>(mark?: unknown) =&gt; Promise&lt;void&gt;</code></strong></p><p>Destroy the current danmaku instance from the container and remove it from memory, which will trigger the <code>beforeDestroy</code> and <code>destroyed</code> hook. You can also try passing a <code>mark</code> identifier. The built-in destroy behavior of the engine does not pass an identifier.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $moved</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $beforeDestroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $destroyed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="danmaku-setstyle" tabindex="-1"><code>danmaku.setStyle()</code> <a class="header-anchor" href="#danmaku-setstyle" aria-label="Permalink to &quot;\`danmaku.setStyle()\`&quot;">​</a></h2><p><strong>Type: <code>(key: StyleKey, val: CSSStyleDeclaration[StyleKey]) =&gt; void</code></strong></p><p>Set the <code>CSS</code> styles of the built-in node for the current danmaku instance.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Change the background color of the built-in danmaku node to red</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;background&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="danmaku-getwidth" tabindex="-1"><code>danmaku.getWidth()</code> <a class="header-anchor" href="#danmaku-getwidth" aria-label="Permalink to &quot;\`danmaku.getWidth()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; number</code></strong></p><p><code>getWidth()</code> will return the width of the danmaku instance itself, which can also be very useful when sending advanced danmaku.</p><h2 id="danmaku-getheight" tabindex="-1"><code>danmaku.getHeight()</code> <a class="header-anchor" href="#danmaku-getheight" aria-label="Permalink to &quot;\`danmaku.getHeight()\`&quot;">​</a></h2><p><strong>Type: <code>() =&gt; number</code></strong></p><p><code>getHeight()</code> will return the height of the danmaku instance itself, which can be very useful when calculating the <code>position</code> for advanced danmaku.</p><h2 id="danmaku-updateduration" tabindex="-1"><code>danmaku.updateDuration()</code> <a class="header-anchor" href="#danmaku-updateduration" aria-label="Permalink to &quot;\`danmaku.updateDuration()\`&quot;">​</a></h2><p><strong>Type: <code>(duration: number) =&gt; void</code></strong></p><p><code>updateDuration()</code> is used to update the movement duration of the danmaku instance. Generally, this method is intended for use by the internal rendering engine.</p><h2 id="danmaku-remove" tabindex="-1"><code>danmaku.remove()</code> <a class="header-anchor" href="#danmaku-remove" aria-label="Permalink to &quot;\`danmaku.remove()\`&quot;">​</a></h2><p><strong>Type: <code>(pluginName: string) =&gt; void</code></strong></p><p>Remove a specific plugin from the current danmaku instance, but you must specify the plugin name.</p><h2 id="danmaku-use" tabindex="-1"><code>danmaku.use()</code> <a class="header-anchor" href="#danmaku-use" aria-label="Permalink to &quot;\`danmaku.use()\`&quot;">​</a></h2><p><strong>Type: <code>(plugin: DanmakuPlugin&lt;T&gt; | ((d: this) =&gt; DanmakuPlugin&lt;T&gt;)) =&gt; DanmakuPlugin&lt;T&gt;</code></strong></p><p>Register a plugin for the current danmaku instance and return the plugin instance. If you need to remove the plugin later, you can save the plugin&#39;s <code>name</code>. If not provided, a <code>uuid</code>-formatted <code>name</code> will be generated by default.</p><p><strong>If <code>name</code> is provided:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test-plugin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plugin.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;test-plugin&#39;</span></span></code></pre></div><p><strong>If <code>name</code> is not provided:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> danmaku.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plugin.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// uuid</span></span></code></pre></div>`,48),h=[t];function l(p,k,d,r,o,g){return i(),a("div",null,h)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};
