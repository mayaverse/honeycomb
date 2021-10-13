import { Hex, Point } from '../types';
export declare const hexToPoint: ({ orientation, dimensions: { xRadius, yRadius }, origin: { x, y }, q, r }: Hex) => Point;
