import { Hex } from '../../hex';
import { Traverser } from '../types';
/**
 * For each hex from `source` traverses over hex coordinates from `traverser`
 * @param source    Each hex in the source is passed one-by-one as a cursor to the traverser
 * @param branch Receives each hex coordinates from source as the start cursor
 */
export declare const branch: <T extends Hex>(source: Traverser<T, Iterable<T>> | Traverser<T, Iterable<T>>[], branch: Traverser<T, Iterable<T>> | Traverser<T, Iterable<T>>[]) => Traverser<T, T[]>;
