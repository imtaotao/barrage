# Manager Properties

> [!NOTE] Unit Hint
> All units involved in the calculation can be computed through expressions, similar to CSS `calc`.
>
> 1. **`number`**: The default unit is `px`.
> 2. **`string`**: Expression calculation. Supports mathematical operations (`+`, `-`, `*`, `/`), and only `%` and `px` units are supported.
>
> ```ts
> manager.setGap('(100% - 10px) / 5');
> ```

## `manager.version`

**Type: `string`**

The current version of the `danmu` library.

## `manager.options`

**Type: `ManagerOptions`**

[**`manager.options`**](./manager-configuration), you can get some initial values from here and use them.

```ts
console.log(manager.options.durationRange); // [number, number]
```

## `manager.statuses`

**Type: `Record<PropertyKey, unknown>`**

A property for recording states, not used by the kernel. It is mainly provided for business purposes to record some states. The default type is `Record<PropertyKey, unknown>`, but you can pass a generic type when creating the `manager`.

```ts {3}
import { create } from 'danmu';

const manager = create<unknown, { background: string }>();

manager.statuses; // Type is `{ background: string }`
```

## `manager.trackCount`

**Type: `number`**

The current number of tracks inside the container. When the container size changes and after `format` (either by manually calling the `format()` method or by calling the `setArea()` method), the `trackCount` will also change accordingly.

## `manager.container`

**Type: `Container`**

See the [**`Container API`**](./container-api) section.

## `manager.pluginSystem`

**Type: `PluginSystem`**

The plugin system instance of `manager`, its API can be found in the **hooks-plugin** documentation.

https://github.com/imtaotao/hooks-plugin?tab=readme-ov-file#apis
