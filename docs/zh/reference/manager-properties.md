# manager 属性

> [!NOTE] 单位提示
> 所有参与计算的单位都允许通过表达式来计算，类似 CSS 的 `calc`。
>
> 1. **`number`**：默认单位为 `px`。
> 2. **`string`**：表达式计算。支持（`+`, `-`, `*`, `/`）数学计算，只支持 `%` 和 `px` 两种单位。
>
> ```ts
> manager.setGap('(100% - 10px) / 5');
> ```

## `manager.version`

**类型：`string`**

当前 `danmu` 库的版本。

## `manager.options`

**类型：`ManagerOptions`**

[**`manager.options`**](./manager-configuration)，你可以从这里取到一些初始值并使用。

```ts
console.log(manager.options.durationRange); // [number, number]
```

## `manager.statuses`

**类型：`Record<PropertyKey, unknown>`**

一个记录状态的属性，在内核中没有使用，主要是提供给业务方记录一些状态使用的。默认类型为一个 `Record<PropertyKey, unknown>`，不过你可以在创建 `manager` 的时候传递范型。

```ts {3}
import { create } from 'danmu';

const manager = create<unknown, { background: string }>();

manager.statuses; // 类型为 { background: string }
```

## `manager.trackCount`

**类型：`number`**

当前容器内部轨道的数量。当容器的大小改变后，并且 `format` 之后（手动调用 `format()` 方法或者调用 `setArea()` 方法也会 `format`），`trackCount` 也会随之改变。

## `manager.container`

**类型：`Container`**

见 [**`容器 API`**](./container-api) 小节。

## `manager.pluginSystem`

**类型：`PluginSystem`**

`manager` 的插件系统实例，其 api 可以见 **hooks-plugin**的文档。

https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis
