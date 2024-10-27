# 容器 API

弹幕容器实例上面有以下一些属性和方法，当你在一些钩子里面获取到 container 实例时，可以参考本小节的知识。你可以通过 [**`manager.container`**](./manager-properties.md#manager-container) 获取实例。

> [!NOTE] 注意事项
> 如果你需要对容器的宽高做更改，建议使用 `manager.setArea()` 方法，而不要通过 `manager.container.setStyle()` 来更改，否则你需要手动调用 `manager.format()`。

```ts
declare class Container {
  width: number;
  height: number;
  node: HTMLDivElement;
  parentNode: HTMLElement | null;
  setStyle<T extends StyleKey>(key: T, val: CSSStyleDeclaration[T]): void;
}
```

## container.width

**类型：`number`**<br/>
**默认值：`0`**

容器的宽度，当你调用 `manager.format()` 后，这个值可能会有变化。

## container.height

**类型：`number`**<br/>
**默认值：`0`**

容器的高度，当你调用 `manager.format()` 后，这个值可能会有变化。

## container.node

**类型：`HTMLDivElement`**<br/>
**默认值：`div`**

容器的 DOM 节点。

## container.parentNode

**类型：`HTMLElement | null`**<br/>
**默认值：`null`**

容器的父节点，通过 `manager.mount()` 设置后，可以通过此属性拿到。

## container.setStyle()

**类型：`setStyle<T extends StyleKey>(key: T, val: CSSStyleDeclaration[T]): void`**

这个方法可以设置容器节点的样式。

```ts
// 所以你可以以下方式来给容器设置一些样式
manager.container.setStyle('background', 'red');
```
