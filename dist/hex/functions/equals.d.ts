import { HexCoordinates, OffsetCoordinates } from '../types';
export declare function equals(a: Exclude<HexCoordinates, OffsetCoordinates>, b: Exclude<HexCoordinates, OffsetCoordinates>): boolean;
export declare function equals(a: OffsetCoordinates, b: OffsetCoordinates): boolean;
