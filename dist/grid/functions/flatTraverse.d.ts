import { Hex, HexCoordinates } from '../../hex';
import { Traverser } from '../types';
export declare const flatTraverse: <T extends Hex>(traversers: Traverser<T, Iterable<T>> | Traverser<T, Iterable<T>>[]) => (cursor: T, getHex: (coordinates: HexCoordinates) => T) => T[];
