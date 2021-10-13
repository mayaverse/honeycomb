import { CompassDirection } from '../../compass';
import { AxialCoordinates, Hex } from '../../hex';
export declare const neighborOfPointy: <T extends Hex>({ offset, q, r, col, row }: T, direction: CompassDirection) => import("../../hex").CubeCoordinates | {
    q: number;
    r: number;
};
export declare const neighborOfFlat: <T extends Hex>({ offset, q, r, col, row }: T, direction: CompassDirection) => import("../../hex").CubeCoordinates | {
    q: number;
    r: number;
};
export declare const neighborOf: <T extends Hex>(hex: T, direction: CompassDirection) => AxialCoordinates;
