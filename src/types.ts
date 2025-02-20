import type { HooksOn, RefinePlugin } from 'hooks-plugin';
import type { Manager } from './manager';
import type { Container } from './container';
import type { FacileDanmaku } from './danmaku/facile';
import type { FlexibleDanmaku } from './danmaku/flexible';

export type DanmakuType = 'facile' | 'flexible';

export type Mode = 'none' | 'strict' | 'adaptive';

export type Direction = 'left' | 'right' | 'none';

export type Layer<T> = StashData<T> | FacileDanmaku<T>;

export type Danmaku<T> = FacileDanmaku<T> | FlexibleDanmaku<T>;

export type StyleKey = keyof Omit<CSSStyleDeclaration, 'length' | 'parentRule'>;

export type FilterCallback<T> = EachCallback<T>;

export type EachCallback<T> = (
  danmaku: FacileDanmaku<T> | FlexibleDanmaku<T>,
) => boolean | void;

export type ValueType<M extends Manager<any>> = Exclude<
  Parameters<M['push']>[0],
  FacileDanmaku<any>
>;

export type ManagerPlugin<T> = RefinePlugin<
  Manager<T>['pluginSystem']['lifecycle']
>;

export type DanmakuPlugin<T> = RefinePlugin<
  FacileDanmaku<T>['pluginSystem']['lifecycle']
>;

export type InternalStatuses = {
  freeze: boolean;
  viewStatus: 'hide' | 'show';
  styles: Record<StyleKey, CSSStyleDeclaration[StyleKey]>;
};

export type PushFlexOptions<T> = Omit<PushOptions<T>, 'direction'> & {
  direction?: Direction;
  position:
    | Position<number | string>
    | ((
        danmaku: Danmaku<T>,
        container: Container,
      ) => Position<number | string>);
};

export interface PushOptions<T> {
  id?: number | string;
  duration?: number;
  plugin?: DanmakuPlugin<T>;
  rate?: ManagerOptions['rate'];
  direction?: ManagerOptions['direction'];
}

export interface EngineOptions {
  mode: Mode;
  rate: number;
  gap: number | string;
  trackHeight: number | string;
  durationRange: [number, number];
  direction: Exclude<Direction, 'none'>;
  limits: {
    view?: number;
    stash: number;
  };
}

export interface ManagerOptions extends EngineOptions {
  interval: number;
}

export interface Location {
  top: number;
  middle: number;
  bottom: number;
}

export interface Position<T = number> {
  x: T;
  y: T;
}

export interface MoveTimer {
  cb: () => void;
  clear: () => void;
}

export interface SizeArea<T> {
  start: T;
  end: T;
}

export interface AreaOptions {
  x?: Partial<SizeArea<number | string>>;
  y?: Partial<SizeArea<number | string>>;
}

export interface FreezeOptions {
  preventEvents?: Array<'pause' | 'stop' | 'resume' | 'start' | (string & {})>;
}

export interface StashData<T> {
  data: T;
  options: Required<PushOptions<T>>;
}

export interface InfoRecord {
  pauseTime: number;
  startTime: number;
  prevPauseTime: number;
}

export interface RenderOptions<T> {
  statuses: InternalStatuses;
  danmakuPlugin: DanmakuPlugin<T>;
  hooks: HooksOn<
    Manager<T>['pluginSystem'],
    ['render', 'finished', 'willRender']
  >;
}

export interface CreateOption<T> extends Partial<ManagerOptions> {
  plugin?: ManagerPlugin<T> | Array<ManagerPlugin<T>>;
}
