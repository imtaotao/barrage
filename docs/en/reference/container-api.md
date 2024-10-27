# Container API

The danmaku container instance has the following properties and methods. You can refer to this section when you get a container instance in certain hooks. You can retrieve the instance via [**`manager.container`**](./manager-properties.md#manager-container).

> [!NOTE] Notes
> If you need to change the dimensions of the container, it's recommended to use the `manager.setArea()` method instead of changing it through `manager.container.setStyle()`. Otherwise, you will need to manually call `manager.format()`.

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

**Type: `number`**<br/>
**Default Value: `0`**

The width of the container, this value may change after calling `manager.format()`.

## container.height

**Type: `number`**<br/>
**Default Value: `0`**

The height of the container, this value may change after calling `manager.format()`.

## container.node

**Type: `HTMLDivElement`**<br/>
**Default Value: `div`**

The DOM node of the container.

## container.parentNode

**Type: `HTMLElement | null`**<br/>
**Default Value: `null`**

The parent node of the container, which can be accessed through this property after setting with `manager.mount()`.

## container.setStyle()

**Type: `setStyle<T extends StyleKey>(key: T, val: CSSStyleDeclaration[T]): void`**

This method allows you to set the style of the container node.

```ts
// So you can set some styles on the container like this
manager.container.setStyle('background', 'red');
```
