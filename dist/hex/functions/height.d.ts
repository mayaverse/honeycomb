import { HexSettings } from '../types';
export declare const heightPointy: (yRadius: number) => number;
export declare const heightFlat: (yRadius: number) => number;
export declare const height: ({ orientation, dimensions: { yRadius } }: HexSettings) => number;
