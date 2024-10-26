import type { FacileDanmaku } from './danmaku/facile';

export interface TrackOptions<T> {
  list: Track<T>['list'];
  index: Track<T>['index'];
  location: Track<T>['location'];
}

export interface Location {
  top: number;
  midile: number;
  bottom: number;
}

export class Track<T> {
  public index: number;
  public location: Location;
  public list: Array<FacileDanmaku<T>>;

  public constructor({ index, list, location }: TrackOptions<T>) {
    this.list = list;
    this.index = index;
    this.location = location;
  }

  // We have to make a copy.
  // During the loop, there are too many factors that change danmaku,
  // which makes it impossible to guarantee the stability of the list.
  public each(fn: (danmaku: FacileDanmaku<T>) => void | boolean) {
    for (const dm of Array.from(this.list)) {
      if (fn(dm) === false) break;
    }
  }

  public clear() {
    this.each((dm) => {
      dm.destroy();
    });
  }

  /**
   * @internal
   */
  public _updateLocation(location: Location) {
    this.location = location;
  }
}
