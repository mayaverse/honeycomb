import { HexPrototype, Point } from '../types';
export declare const pointToCube: ({ x, y }: Point, { dimensions: { xRadius, yRadius }, origin, isPointy }: Pick<HexPrototype, 'dimensions' | 'origin' | 'isPointy'>) => import("../types").CubeCoordinates;
