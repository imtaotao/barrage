import { remove } from 'aidly';
import type { Container } from './container';
import type { FacileDanmaku } from './danmaku/facile';

export interface TrackOptions<T> {
  index: number;
  location: Location;
  container: Container;
  list: Array<FacileDanmaku<T>>;
}

export interface Location {
  top: number;
  midile: number;
  bottom: number;
}

export class Track<T> {
  private _container: Container;
  private list: Array<FacileDanmaku<T>>;
  public isLock = false;
  public index: number;
  public location: Location;

  public constructor({ index, list, location, container }: TrackOptions<T>) {
    this.list = list;
    this.index = index;
    this.location = location;
    this._container = container;
  }

  public get width() {
    return this._container.width;
  }

  public get height() {
    return this.location.bottom - this.location.top;
  }

  // We have to make a copy.
  // During the loop, there are too many factors that change danmaku,
  // which makes it impossible to guarantee the stability of the list.
  public each(fn: (danmaku: FacileDanmaku<T>) => unknown | boolean) {
    for (const dm of Array.from(this.list)) {
      if (fn(dm) === false) break;
    }
  }

  public lock() {
    this.isLock = true;
  }

  public unlock() {
    this.isLock = false;
  }

  public clear() {
    this.each((dm) => dm.destroy());
  }

  /**
   * @internal
   */
  public _add(dm: FacileDanmaku<T>) {
    this.list.push(dm);
  }

  /**
   * @internal
   */
  public _remove(dm: FacileDanmaku<T>) {
    remove(this.list, dm);
  }

  /**
   * @internal
   */
  public _updateLocation(location: Location) {
    this.location = location;
  }

  /**
   * @internal
   */
  public _last(li: number) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const dm = this.list[i - li];
      if (dm && !dm.paused && dm.loops === 0 && dm.type === 'facile') {
        return dm;
      }
    }
    return null;
  }
}
