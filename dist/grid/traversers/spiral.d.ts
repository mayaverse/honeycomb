import { Hex } from '../../hex';
import { RotationLike, StartOrAt, Traverser } from '../types';
export declare const spiral: <T extends Hex>({ radius, start, at, rotation }: SpiralOptions) => Traverser<T, T[]>;
export declare type SpiralOptions = StartOrAt & {
    radius: number;
    rotation?: RotationLike;
};
