import { CubeCoordinates, HexCoordinates, HexPrototype } from '../types';
/**
 * Util for converting offset/axial/cube/tuple coordinates to cube coordinates. It's not placed in /src/utils because that causes circular dependencies.
 * @private
 */
export declare function assertCubeCoordinates(coordinates: HexCoordinates, hexPrototype: Pick<HexPrototype, 'offset' | 'isPointy'>): CubeCoordinates;
