# 轨道 API

Track 类是轨道相关的 api，你可以通过 [**`manager.getTrack(i)`**](./manager-api#manager-gettrack) 来获取某一条轨道实例。

```ts
interface Location {
  top: number;
  middle: number;
  bottom: number;
}

declare class Track {
  width: number;
  height: number;
  index: number;
  isLock: boolean;
  location: Location;
  list: Array<FacileDanmaku<T>>;
  lock(): void;
  unlock(): void;
  clear(): void;
  each(fn: (danmaku: FacileDanmaku<T>) => unknown | boolean): void;
}
```

## track.width

**类型：`number`**<br/>

轨道的宽度，当你调用 `manager.format()` 后，这个值可能会有变化。

## track.height

**类型：`number`**<br/>

轨道的高度，当你调用 `manager.format()` 后，这个值可能会有变化。

## track.index

**类型：`number`**<br/>

再当前容器的轨道列表中，当前这条轨道所在的坐标，例如 index 为 1，则代表是当前容器轨道列表中的第 2 条轨道。

## track.isLock

**类型：`boolean`**<br/>
**默认值：`false`**

用来判断当前这条轨道是否被锁定。

## track.list

**类型：`Array<FacileDanmaku<T>`**

当前这条轨道内部的弹幕列表，如果你要对列表进行循环，建议使用 track.each() 方法。

## track.location

**类型：`Location`**

当前这条轨道高度相关位置信息，**单位为 `px`**, 他是基于容器来计算的，当容器 format 之后，此熟悉也会跟着变化，当你发送高级弹幕的时候如果需要将其发送到某条轨道上，此属性可能会很有用。

> [!NOTE] 提示
>
> 1. 对于弹幕的高度，如果你不需要通过计算就可以得到，则不需要通过 `getHeight()` 方法。
> 2. 你要确保获取的轨道存在，否则会报错，可以通过 `manager.trackCount` 来判断当前总共有多少条轨道。
> 3. 通过以下示例的方式渲染高级弹幕，实际上弹幕不会受到轨道的约束，只是渲染的位置在某条轨道上，所以当你对某条轨道调用了 `track.lock()`，并不会影响高级弹幕。
> 4. 你可以在我们的在线 [**demo**](https://imtaotao.github.io/danmu/) 打开浏览器控制台输入这段代码查看效果。

```ts {9,12}
// 发送一个高级弹幕
manager.pushFlexibleDanmaku(
  { content: '弹幕内容' },
  {
    duration: 5000,
    direction: 'none',
    position(danmaku, container) {
      // 渲染在第 4 条轨道中
      const { middle } = manager.getTrack(3).location;
      return {
        x: (container.width - danmaku.getWidth()) * 0.5,
        y: middle - danmaku.getHeight() / 2,
      };
    },
  },
);
```

## track.lock()

**类型：`() => void`**

用于锁定当前轨道，当轨道被锁定之后，当前这条轨道将不会发送新的弹幕。

## track.unlock()

**类型：`() => void`**

解锁当前这条轨道

## track.clear()

**类型：`() => void`**

清空当前这条轨道内部所有的弹幕，但是不会阻止后续的弹幕发送。

```ts
// 如果你需要清空并阻止后续的弹幕发送
const track = manager.getTrack(0);

track.clear();
track.lock();
```

## track.each()

**类型：`(fn: (danmaku: FacileDanmaku<T>) => unknown | boolean) => void`**

对 `track.list` 进行遍历，当你有对弹幕进行销毁的行为时，最好是使用此方法，回调函数返回 `false` 会阻止后续的遍历。
