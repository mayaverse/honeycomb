export interface Point {
    x: number;
    y: number;
}
export declare enum Orientation {
    FLAT = "FLAT",
    POINTY = "POINTY"
}
export declare type OffsetCoordinates = {
    col: number;
    row: number;
};
export interface AxialCoordinates {
    q: number;
    r: number;
}
export interface CubeCoordinates extends AxialCoordinates {
    s: number;
}
export interface PartialCubeCoordinates extends AxialCoordinates {
    s?: number;
}
export declare type TupleCoordinates = [q: number, r: number, s?: number];
export declare type HexCoordinates = PartialCubeCoordinates | OffsetCoordinates | TupleCoordinates;
export interface Ellipse {
    xRadius: number;
    yRadius: number;
}
export interface BoundingBox {
    width: number;
    height: number;
}
export declare type hexDimensions = Ellipse | BoundingBox | number;
export interface HexSettings {
    dimensions: Ellipse;
    orientation: Orientation;
    origin: Point;
    offset: number;
}
export interface HexPrototype extends HexSettings {
    readonly __isHoneycombHex: true;
    readonly [Symbol.toStringTag]: 'Hex';
    readonly center: Point;
    readonly col: number;
    readonly corners: Point[];
    readonly height: number;
    readonly isFlat: boolean;
    readonly isPointy: boolean;
    readonly row: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    s: number;
    equals(this: this, coordinates: HexCoordinates): boolean;
    clone(this: this, newProps?: Partial<this> | HexCoordinates): this;
    toString(this: this): string;
}
export interface Hex extends HexPrototype, AxialCoordinates {
}
