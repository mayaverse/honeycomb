import { CubeCoordinates, HexPrototype, OffsetCoordinates } from '../types';
export declare const offsetToCubePointy: (col: number, row: number, offset: number) => CubeCoordinates;
export declare const offsetToCubeFlat: (col: number, row: number, offset: number) => CubeCoordinates;
export declare const offsetToCube: ({ col, row }: OffsetCoordinates, { offset, isPointy }: Pick<HexPrototype, 'offset' | 'isPointy'>) => CubeCoordinates;
