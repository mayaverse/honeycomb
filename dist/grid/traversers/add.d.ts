import { Hex, HexCoordinates } from '../../hex';
import { Traverser } from '../types';
export declare const add: <T extends Hex>(...coordinates: HexCoordinates[]) => Traverser<T, T[]>;
