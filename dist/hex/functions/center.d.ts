import { Hex, HexPrototype, Point } from '../types';
export declare function center(hexOrPrototype: Hex | Pick<HexPrototype, 'width' | 'height' | 'origin'>): Point;
