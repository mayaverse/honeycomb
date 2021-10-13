import { BoundingBox, Ellipse, Hex, HexPrototype, HexSettings, Orientation, Point } from '../types';
export declare const defaultHexSettings: HexSettings;
export declare const createHexPrototype: <T extends Hex>(options?: Partial<Omit<T, "dimensions" | "orientation" | "origin" | "offset"> | HexPrototypeOptions> | undefined) => T;
export interface OriginFn {
    <T extends Omit<HexPrototype, 'origin'>>(prototype: T): Point;
}
export interface HexPrototypeOptions {
    dimensions: Ellipse | BoundingBox | number;
    orientation: Orientation | 'pointy' | 'flat';
    origin: Point | 'topLeft' | OriginFn;
    offset: number;
}
