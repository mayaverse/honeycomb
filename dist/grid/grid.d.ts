import { Hex, HexCoordinates, Point } from '../hex';
import { Callback, Traverser } from './types';
export declare class Grid<T extends Hex> {
    hexPrototype: T;
    static from<T extends Hex>(iterable: Map<string, T> | Iterable<T>): Grid<T>;
    get [Symbol.toStringTag](): string;
    store: Map<string, T>;
    getHex: (coordinates?: HexCoordinates | undefined) => T;
    private _getPrevHexes;
    constructor(hexPrototype: T, traversers?: Traverser<T> | Traverser<T>[]);
    constructor(hexPrototype: T, store?: Map<string, T>);
    pointToHex(point: Point): T;
    distance(from: HexCoordinates, to: HexCoordinates): number;
    update(callback: (grid: Grid<T>) => Grid<T> | void): Grid<T>;
    each(callback: Callback<T, void>): Grid<T>;
    map(callback: Callback<T, T | void>): Grid<T>;
    filter(predicate: Callback<T, boolean>): Grid<T>;
    takeWhile(predicate: Callback<T, boolean>): Grid<T>;
    traverse(traversers: Traverser<T>[] | Traverser<T>): Grid<T>;
    hexes(): T[];
    run(callback?: Callback<T, void>): Grid<T>;
    private _clone;
}
