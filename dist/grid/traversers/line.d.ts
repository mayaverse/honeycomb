import { CompassDirection } from '../../compass';
import { Hex, HexCoordinates } from '../../hex';
import { StartOrAt, Traverser, XOR } from '../types';
export declare function line<T extends Hex>(options: LineAsVectorOptions): Traverser<T, T[]>;
export declare function line<T extends Hex>(options: LineBetweenOptions): Traverser<T, T[]>;
export declare type LineAsVectorOptions = StartOrAt & {
    direction: CompassDirection;
    length?: number;
};
export declare type LineBetweenOptions = StartOrAt & XOR<{
    until: HexCoordinates;
}, {
    through: HexCoordinates;
}>;
