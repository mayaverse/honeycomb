import { CompassDirection } from '../../compass';
import { Hex, HexCoordinates } from '../../hex';
import { StartOrAt, Traverser } from '../types';
export declare function rectangle<T extends Hex>(options: RectangleOptions): Traverser<T, T[]>;
export declare function rectangle<T extends Hex>(cornerA: HexCoordinates, cornerB: HexCoordinates, includeCornerA?: boolean): Traverser<T, T[]>;
export declare type RectangleOptions = StartOrAt & {
    width: number;
    height: number;
    direction?: CompassDirection;
};
/**
 * This is the "old way" of creating rectangles. It's less performant (up until ~40x slower with 200x200 rectangles), but it's able to create
 * actual rectangles (with 90° corners) for the ordinal directions. But because I assume people mostly need rectangles in the cardinal directions,
 * I've decided to drop "true ordinal rectangle" support for now.
 */
