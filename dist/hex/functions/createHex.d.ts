import { Hex, HexCoordinates } from '../types';
export declare const createHex: <T extends Hex>(prototypeOrHex: T, props?: Partial<T> | HexCoordinates) => T;
