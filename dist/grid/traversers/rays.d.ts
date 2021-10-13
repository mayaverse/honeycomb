import { Hex } from '../../hex';
import { RotationLike, StartOrAt, Traverser } from '../types';
export declare const rays: <T extends Hex>({ at, start, length, rotation, updateRay, }: RaysOptions<T>) => Traverser<T, Iterable<T>>;
export declare type RaysOptions<T extends Hex> = StartOrAt & {
    length: number;
    rotation?: RotationLike;
    updateRay?: (hexesInRay: T[]) => T[];
};
