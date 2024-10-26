import{_ as a,c as e,o as s,a4 as i}from"./chunks/framework.DKWfLnao.js";const m=JSON.parse('{"title":"manager 属性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/manager-properties.md","filePath":"zh/reference/manager-properties.md","lastUpdated":1729921934000}'),n={name:"zh/reference/manager-properties.md"},t=i('<h1 id="manager-属性" tabindex="-1">manager 属性 <a class="header-anchor" href="#manager-属性" aria-label="Permalink to &quot;manager 属性&quot;">​</a></h1><div class="note custom-block github-alert"><p class="custom-block-title">单位提示</p><p>所有参与计算的单位都允许通过表达式来计算，类似 CSS 的 <code>calc</code>。</p><ol><li><strong><code>number</code></strong>：默认单位为 <code>px</code>。</li><li><strong><code>string</code></strong>：表达式计算。支持（<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>）数学计算，只支持 <code>%</code> 和 <code>px</code> 两种单位。</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(100% - 10px) / 5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></div><h2 id="manager-version" tabindex="-1"><code>manager.version</code> <a class="header-anchor" href="#manager-version" aria-label="Permalink to &quot;`manager.version`&quot;">​</a></h2><p><strong>类型：<code>string</code></strong></p><p>当前 <code>danmu</code> 库的版本。</p><h2 id="manager-options" tabindex="-1"><code>manager.options</code> <a class="header-anchor" href="#manager-options" aria-label="Permalink to &quot;`manager.options`&quot;">​</a></h2><p><strong>类型：<code>ManagerOptions</code></strong></p><p><a href="./manager-configuration.html"><strong><code>manager.options</code></strong></a>，你可以从这里取到一些初始值并使用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(manager.options.durationRange); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [number, number]</span></span></code></pre></div><h2 id="manager-statuses" tabindex="-1"><code>manager.statuses</code> <a class="header-anchor" href="#manager-statuses" aria-label="Permalink to &quot;`manager.statuses`&quot;">​</a></h2><p><strong>类型：<code>Record&lt;PropertyKey, unknown&gt;</code></strong></p><p>一个记录状态的属性，在内核中没有使用，主要是提供给业务方记录一些状态使用的。默认类型为一个 <code>Record&lt;PropertyKey, unknown&gt;</code>，不过你可以在创建 <code>manager</code> 的时候传递范型。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">background</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }&gt;();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager.statuses; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 类型为 { background: string }</span></span></code></pre></div><h2 id="manager-trackcount" tabindex="-1"><code>manager.trackCount</code> <a class="header-anchor" href="#manager-trackcount" aria-label="Permalink to &quot;`manager.trackCount`&quot;">​</a></h2><p><strong>类型：<code>number</code></strong></p><p>当前容器内部轨道的数量。当容器的大小改变后，并且 <code>format</code> 之后（你手动调用 <code>format()</code> 方法或者调用 <code>setArea()</code> 方法），<code>trackCount</code> 也会随之改变。</p><h2 id="manager-pluginsystem" tabindex="-1"><code>manager.pluginSystem</code> <a class="header-anchor" href="#manager-pluginsystem" aria-label="Permalink to &quot;`manager.pluginSystem`&quot;">​</a></h2><p><strong>类型：<code>PluginSystem</code></strong></p><p><code>manager</code> 的插件系统实例，其 api 可以见 <strong>hooks-plugin</strong>的文档。</p><p><a href="https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis" target="_blank" rel="noreferrer">https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis</a></p><h2 id="manager-container" tabindex="-1"><code>manager.container</code> <a class="header-anchor" href="#manager-container" aria-label="Permalink to &quot;`manager.container`&quot;">​</a></h2><p><strong>类型：<code>Container</code></strong></p><p>见 <a href="./container-api.html"><strong><code>容器 API</code></strong></a> 小节。</p>',23),o=[t];function r(p,d,l,c,h,g){return s(),e("div",null,o)}const u=a(n,[["render",r]]);export{m as __pageData,u as default};
