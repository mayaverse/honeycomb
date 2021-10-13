import { HexCoordinates, HexPrototype } from '../../hex';
export declare function distance(hexPrototype: Pick<HexPrototype, 'offset' | 'isPointy'>, from: HexCoordinates, to: HexCoordinates): number;
