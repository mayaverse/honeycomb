import { Hex, OffsetCoordinates } from '../types';
export declare const hexToOffsetPointy: (q: number, r: number, offset: number) => OffsetCoordinates;
export declare const hexToOffsetFlat: (q: number, r: number, offset: number) => OffsetCoordinates;
export declare const hexToOffset: ({ q, r, offset, isPointy }: Pick<Hex, 'q' | 'r' | 'offset' | 'isPointy'>) => OffsetCoordinates;
