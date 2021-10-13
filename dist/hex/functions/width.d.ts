import { HexSettings } from '../types';
export declare const widthPointy: (xRadius: number) => number;
export declare const widthFlat: (xRadius: number) => number;
export declare const width: ({ orientation, dimensions: { xRadius } }: HexSettings) => number;
