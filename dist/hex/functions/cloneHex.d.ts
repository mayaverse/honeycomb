import { Hex, HexCoordinates } from '../types';
export declare const cloneHex: <T extends Hex>(hex: T, newProps?: Partial<T> | HexCoordinates) => T;
