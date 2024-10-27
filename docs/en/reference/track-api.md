# Track API

The Track class represents the API related to tracks. You can obtain an instance of a track by using [**`manager.getTrack(i)`**](./manager-api#manager-gettrack).

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

**Type: `number`**<br/>

The width of the track, which may change after you call `manager.format()`.

## track.height

**Type: `number`**<br/>

The height of the track, which may change after you call `manager.format()`.

## track.index

**Type: `number`**<br/>

The position of this track in the track list of the current container. For example, if index is 1, it represents the second track in the list.

## track.isLock

**Type: `boolean`**<br/>
**Default Value: `false`**

Used to determine if the current track is locked.

## track.list

**Type: `Array<FacileDanmaku<T>`**

The list of facile danmaku within this track. If you need to iterate over the list, it is recommended to use the `track.each()` method.

## track.location

**Type: `Location`**

This attribute represents the height-related position information of the track, measured in `px`. It is calculated based on the container, and changes when the container is formatted. This property can be especially useful when you need to send a flexible danmaku to a specific track.

> [!NOTE] Tips
>
> 1. If you can determine the height of the danmaku without needing to calculate it, you don’t need to use the `getHeight()` method.
> 2. Ensure that the track you are accessing exists, otherwise it will throw an error. You can check how many tracks are available using `manager.trackCount`.
> 3. When rendering flexible danmaku as shown in the following example, the danmaku itself is not constrained by the track; it is merely rendered at a track's location. Therefore, calling `track.lock()` on a track will not affect the flexible danmaku.
> 4. You can try this code in our online [**demo**](https://imtaotao.github.io/danmu/) by opening your browser's console and entering the code to see the effects.

```ts {9,12}
// Send a flexible danmaku
manager.pushFlexibleDanmaku(
  { content: 'content' },
  {
    duration: 5000,
    direction: 'none',
    position(danmaku, container) {
      // Render in the fourth track
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

**Type: `() => void`**

Used to lock the current track. Once the track is locked, no new danmaku will be sent on this track.

## track.unlock()

**Type: `() => void`**

Unlocks the current track.

## track.clear()

**Type: `() => void`**

Clears all danmaku within the current track, but does not prevent subsequent danmaku from being sent.

```ts
// If you need to clear the track and prevent further danmaku
const track = manager.getTrack(0);

track.clear();
track.lock();
```

## track.each()

**Type: `(fn: (danmaku: FacileDanmaku<T>) => unknown | boolean) => void`**

Iterates over `track.list`. It is advised to use this method when you need to destroy individual danmaku. Returning `false` from the callback function will prevent further iterations.
