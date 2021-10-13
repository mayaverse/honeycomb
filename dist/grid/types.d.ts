import { Hex, HexCoordinates } from '../hex';
import { Grid } from './grid';
export interface Traverser<T extends Hex, R extends Iterable<T> = Iterable<T>> {
    (cursor: T, getHex: (coordinates: HexCoordinates) => T): R;
}
export interface Callback<T extends Hex, R> {
    (hex: T, grid: Grid<T>): R;
}
export declare enum Rotation {
    CLOCKWISE = "CLOCKWISE",
    COUNTERCLOCKWISE = "COUNTERCLOCKWISE"
}
export declare type RotationLike = Rotation | 'CLOCKWISE' | 'clockwise' | 'COUNTERCLOCKWISE' | 'counterclockwise';
export declare type StartOrAt = XOR<{
    start?: HexCoordinates;
}, {
    at?: HexCoordinates;
}>;
export declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends Record<string, unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
