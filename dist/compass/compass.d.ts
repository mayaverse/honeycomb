export declare enum CardinalCompassDirection {
    N = 0,
    E = 2,
    S = 4,
    W = 6
}
export declare enum OrdinalCompassDirection {
    NE = 1,
    SE = 3,
    SW = 5,
    NW = 7
}
export declare enum CompassDirection {
    N = 0,
    NE = 1,
    E = 2,
    SE = 3,
    S = 4,
    SW = 5,
    W = 6,
    NW = 7
}
export declare type CompassDirectionLike = keyof typeof CompassDirection | number;
export declare class Compass {
    static N: CompassDirection;
    static NE: CompassDirection;
    static E: CompassDirection;
    static SE: CompassDirection;
    static S: CompassDirection;
    static SW: CompassDirection;
    static W: CompassDirection;
    static NW: CompassDirection;
    static Cardinal: CardinalCompassDirection;
    static Ordinal: OrdinalCompassDirection;
    static of(direction?: CompassDirectionLike): Compass;
    static isCardinal(direction: CompassDirection): boolean;
    static isOrdinal(direction: CompassDirection): boolean;
    static rotate(direction: number, steps: number): CompassDirection;
    direction: CompassDirection;
    constructor(direction?: CompassDirectionLike);
    isCardinal(): boolean;
    isOrdinal(): boolean;
    rotate(steps: number): CompassDirection;
}
