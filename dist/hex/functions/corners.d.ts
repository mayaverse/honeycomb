import { Hex, HexSettings, Point } from '../types';
export declare const cornersPointy: (width: number, height: number, { x, y }: Point) => {
    x: number;
    y: number;
}[];
export declare const cornersFlat: (width: number, height: number, { x, y }: Point) => {
    x: number;
    y: number;
}[];
export declare function corners(hex: Hex): Point[];
export declare function corners(hexSettings: Omit<HexSettings, 'offset'>): Point[];
