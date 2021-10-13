import { Hex, HexCoordinates } from '../../hex';
import { RotationLike, StartOrAt, Traverser } from '../types';
export declare const ring: <T extends Hex>({ start, at, center, rotation }: RingOptions) => Traverser<T, T[]>;
export declare type RingOptions = StartOrAt & {
    center: HexCoordinates;
    rotation?: RotationLike;
};
