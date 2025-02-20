# 快速开始

> [!NOTE] 注意
> <a href="https://www.npmjs.com/package/danmu">danmu</a> 目前还没有到 v1.0 版本，不要使用未公开的 API，如果您发现任何错误或意外情况，请在 <a href="https://github.com/imtaotao/danmu/issues/new">GitHub 上创建 issues</a>。

`danmu` 是一个**高度可扩展，功能丰富齐全**的弹幕库，为开发者提供便捷接入和编写自定义插件的能力，满足复杂的需求同时也允许极致的定制化。我们建立了一个**示例站点**，你可以在此看到一些效果。

> [!NOTE] 提示
> 你可以在 demo 站点中打开控制台，通过 `window.manager` 来获取到 manager 实例，用来实时调试查看效果。

https://imtaotao.github.io/danmu

## 🎯 为什么选择 `danmu` ?

现代的视频网站或多或少的都有添加弹幕功能，弹幕可以带来一系列不同的观影体验，实现一个好用，功能齐全的弹幕库并不是一件容易的事情，市面上有很多不同的弹幕库选择，但是大多数都依赖都是基于 `Canvas` 来实现的，这导致样式的绘制会很局限，并且没有什么手段进行扩展，这对后续的迭代来说是致命的，因为换一个库来实现，成本很高。

`danmu` 基于 `CSS + DOM` 来绘制弹幕，这意味着，弹幕的运动可以基于浏览器原生的动画能力，并且 `CSS + DOM` 可以做的事情格外的多，这让不同形式的弹幕都得以存在（想象一下一个弹幕嵌入一个网页的场景）。并且我们提供的弹幕的碰撞计算，弹幕的运动速率可以不是固定的但是也能不会互相碰撞。

## 🚀 快速开始

### 1. 安装依赖

你可以使用您喜欢的包管理器在项目的依赖项中安装 `danmu`，从而将 Danmaku 添加到您现有的项目当中：

::: code-group

```sh [npm]
$ npm install danmu
```

```sh [pnpm]
$ pnpm install danmu
```

```sh [yarn]
$ yarn add danmu
```

:::

我们也提供了 `CDN` 供你来开发调试，**不要在生产环境使用此 `CDN`**：

```html
<script src="https://unpkg.com/danmu/dist/danmu.umd.js"></script>
```

### 2. 创建 `manager`

`danmu` 核心包只暴露了一个 `create` 方法，用来创建一个 `manager` 实例，是的，我们所有的实现都是多实例的方式实现的，创建的时候传入的配置可以看[**配置**](../reference/manager-configuration)这一章节的介绍。

```ts {8}
import { create } from 'danmu';

// 在此处创建一个 manager 实例，如果不传递则会使用默认的配置
const manager = create({
  trackHeight: '20%',
  plugin: {
    $createNode(danmaku) {
      danmaku.node.textContent = danmaku.data;
    },

    willRender(ref) {
      console.log(ref.type); // 即将要渲染的弹幕类型
      console.log(ref.danmaku); // 即将要渲染的弹幕实例
      ref.prevent = true; // 设置为 true 将阻止渲染，可以在这里做弹幕过滤工作
      return ref;
    },
  },
  // .
});
```

### 3. 挂载并渲染

当我们创建好了一个 `manager` 的时候就可以挂载到某个具体的节点上并渲染，实际上 `manager` 内部会启动一个定时器来轮询将内存区的弹幕来渲染出来，而轮询的时间是交由你来控制的（如果没有通过配置传递，会有一个默认的值 **`500ms`**，详见配置章节）。

```ts
const container = document.getElementById('container');

// 挂载，然后开始渲染
manager.mount(container);
manager.startPlaying();
```

### 4. 发送普通弹幕

当前面的一些工作准备完成之后，就可以发送弹幕了。

```ts
// 发送弹幕的内容类型可以在创建 manager 的时候通过范型来约定，可以看后面的章节
manager.push('弹幕内容');
```

但是通过 [**`manager.push`**](../reference/manager-api/#manager-push) 方法来发送的弹幕可能会受到弹幕算法的影响，不会立即渲染，想象一些往一个数组里面 push 一个数据，但是消费是从数组最前端拿出数据消费的。我们可以换一个 [**`manager.unshift`**](../reference/manager-api/#manager-unshift) 方法来发送弹幕。

```ts
// 这会在下一次渲染轮询中，立即渲染
manager.unshift('弹幕内容');
```

我们在初始化 `manager` 的时候，可以通过 `plugin` 属性来传递默认全局插件，他的作用域是对所有的弹幕都生效，而且包含[**全局**](../reference/manager-hooks)和[**弹幕**](../reference/danmaku-hooks)两种类型的钩子。

不过我们在发送弹幕的时候，也可以传递弹幕自己的插件，他不包含全局钩子，**作用域只对当前渲染的弹幕生效**，如果你需要的话，这会让你更好的来控制当前要渲染的这个弹幕。

```ts
manager.push('弹幕内容', {
  plugin: {
    beforeMove(danmaku) {
      // beforeMove 钩子会在弹幕即将开始运动之前触发，你可以在这里更改弹幕的样式
      danmaku.setStyle(cssKey, cssValue);
    },
  },
  // .
});
```

### 5. 发送高级弹幕

普通弹幕会受到碰撞渲染算法的限制，对于那些需要特殊处理的弹幕，例如顶部弹幕，特殊位置的弹幕，则需要通过 [**`manager.pushFlexibleDanmaku`**](../reference/manager-api/#manager-pushflexibledanmaku) 这个 `API` 发送高级弹幕来渲染，高级弹幕不会受到碰撞算法的限制。

```ts
manager.pushFlexibleDanmaku('弹幕内容', {
  id: 1, // 可选参数
  duration: 1000, // 默认从 manager.options.durationRange 中随机取一个值
  direction: 'none', // 默认取 manager.options.direction 的值
  position: (danmaku, container) => {
    // 这会让弹幕在容器居中的位置出现，因为 direction 为 none，所以会静止播放 1s
    return {
      x: `50% - ${danmaku.getWidth() / 2}`, // [!code ++]
      y: `50% - ${danmaku.getHeight() / 2}`, // [!code ++]
    };
  },
  plugin: {
    // plugin 参数是可选的，具体可以参考普通弹幕的钩子，这里是一样的
  },
});
```
