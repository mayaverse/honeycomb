import { Hex } from 'honeycomb-grid'
import { BUILDING, FIELD, ROAD, TREES, WATER } from './terrain'
import { BaseTile } from './types'

export const TILES: Array<BaseTile & Pick<Hex, 'q' | 'r'>> = [
  { q: 0, r: 0, terrain: TREES },
  { q: 1, r: 0, terrain: TREES },
  { q: 2, r: 0, terrain: TREES },
  { q: 3, r: 0, terrain: WATER },
  { q: 4, r: 0, terrain: FIELD },
  { q: 5, r: 0, terrain: FIELD },
  { q: 6, r: 0, terrain: FIELD },
  { q: 7, r: 0, terrain: FIELD },
  { q: 8, r: 0, terrain: TREES },
  { q: 9, r: 0, terrain: TREES },
  { q: 10, r: 0, terrain: TREES },
  { q: 11, r: 0, terrain: TREES },
  { q: 0, r: 1, terrain: FIELD },
  { q: 1, r: 1, terrain: FIELD },
  { q: 2, r: 1, terrain: WATER },
  { q: 3, r: 1, terrain: FIELD },
  { q: 4, r: 1, terrain: FIELD },
  { q: 5, r: 1, terrain: FIELD },
  { q: 6, r: 1, terrain: FIELD },
  { q: 7, r: 1, terrain: FIELD },
  { q: 8, r: 1, terrain: FIELD },
  { q: 9, r: 1, terrain: FIELD },
  { q: 10, r: 1, terrain: TREES },
  { q: 11, r: 1, terrain: TREES },
  { q: -1, r: 2, terrain: ROAD },
  { q: 0, r: 2, terrain: ROAD },
  { q: 1, r: 2, terrain: ROAD },
  { q: 2, r: 2, terrain: ROAD },
  { q: 3, r: 2, terrain: ROAD },
  { q: 4, r: 2, terrain: ROAD },
  { q: 5, r: 2, terrain: ROAD },
  { q: 6, r: 2, terrain: ROAD },
  { q: 7, r: 2, terrain: ROAD },
  { q: 8, r: 2, terrain: FIELD },
  { q: 9, r: 2, terrain: FIELD },
  { q: 10, r: 2, terrain: TREES },
  { q: -1, r: 3, terrain: FIELD },
  { q: 0, r: 3, terrain: FIELD },
  { q: 1, r: 3, terrain: FIELD },
  { q: 2, r: 3, terrain: WATER },
  { q: 3, r: 3, terrain: FIELD },
  { q: 4, r: 3, terrain: FIELD },
  { q: 5, r: 3, terrain: TREES },
  { q: 6, r: 3, terrain: TREES },
  { q: 7, r: 3, terrain: ROAD },
  { q: 8, r: 3, terrain: FIELD },
  { q: 9, r: 3, terrain: FIELD },
  { q: 10, r: 3, terrain: TREES },
  { q: -2, r: 4, terrain: TREES },
  { q: -1, r: 4, terrain: FIELD },
  { q: 0, r: 4, terrain: FIELD },
  { q: 1, r: 4, terrain: FIELD },
  { q: 2, r: 4, terrain: WATER },
  { q: 3, r: 4, terrain: WATER },
  { q: 4, r: 4, terrain: FIELD },
  { q: 5, r: 4, terrain: BUILDING },
  { q: 6, r: 4, terrain: BUILDING },
  { q: 7, r: 4, terrain: ROAD },
  { q: 8, r: 4, terrain: FIELD },
  { q: 9, r: 4, terrain: FIELD },
  { q: -2, r: 5, terrain: TREES },
  { q: -1, r: 5, terrain: FIELD },
  { q: 0, r: 5, terrain: FIELD },
  { q: 1, r: 5, terrain: FIELD },
  { q: 2, r: 5, terrain: FIELD },
  { q: 3, r: 5, terrain: WATER },
  { q: 4, r: 5, terrain: FIELD },
  { q: 5, r: 5, terrain: FIELD },
  { q: 6, r: 5, terrain: FIELD },
  { q: 7, r: 5, terrain: ROAD },
  { q: 8, r: 5, terrain: FIELD },
  { q: 9, r: 5, terrain: TREES },
  { q: -3, r: 6, terrain: TREES },
  { q: -2, r: 6, terrain: FIELD },
  { q: -1, r: 6, terrain: FIELD },
  { q: 0, r: 6, terrain: FIELD },
  { q: 1, r: 6, terrain: TREES },
  { q: 2, r: 6, terrain: FIELD },
  { q: 3, r: 6, terrain: WATER },
  { q: 4, r: 6, terrain: WATER },
  { q: 5, r: 6, terrain: WATER },
  { q: 6, r: 6, terrain: TREES },
  { q: 7, r: 6, terrain: ROAD },
  { q: 8, r: 6, terrain: ROAD },
  { q: -3, r: 7, terrain: FIELD },
  { q: -2, r: 7, terrain: FIELD },
  { q: -1, r: 7, terrain: TREES },
  { q: 0, r: 7, terrain: FIELD },
  { q: 1, r: 7, terrain: FIELD },
  { q: 2, r: 7, terrain: FIELD },
  { q: 3, r: 7, terrain: TREES },
  { q: 4, r: 7, terrain: TREES },
  { q: 5, r: 7, terrain: WATER },
  { q: 6, r: 7, terrain: FIELD },
  { q: 7, r: 7, terrain: FIELD },
  { q: 8, r: 7, terrain: FIELD },
  { q: -4, r: 8, terrain: FIELD },
  { q: -3, r: 8, terrain: BUILDING },
  { q: -2, r: 8, terrain: TREES },
  { q: -1, r: 8, terrain: TREES },
  { q: 0, r: 8, terrain: TREES },
  { q: 1, r: 8, terrain: FIELD },
  { q: 2, r: 8, terrain: TREES },
  { q: 3, r: 8, terrain: TREES },
  { q: 4, r: 8, terrain: TREES },
  { q: 5, r: 8, terrain: WATER },
  { q: 6, r: 8, terrain: FIELD },
  { q: 7, r: 8, terrain: TREES },
  { q: -4, r: 9, terrain: FIELD },
  { q: -3, r: 9, terrain: FIELD },
  { q: -2, r: 9, terrain: TREES },
  { q: -1, r: 9, terrain: TREES },
  { q: 0, r: 9, terrain: FIELD },
  { q: 1, r: 9, terrain: TREES },
  { q: 2, r: 9, terrain: TREES },
  { q: 3, r: 9, terrain: FIELD },
  { q: 4, r: 9, terrain: WATER },
  { q: 5, r: 9, terrain: FIELD },
  { q: 6, r: 9, terrain: TREES },
  { q: 7, r: 9, terrain: TREES },
  { q: -5, r: 10, terrain: TREES },
  { q: -4, r: 10, terrain: FIELD },
  { q: -3, r: 10, terrain: TREES },
  { q: -2, r: 10, terrain: TREES },
  { q: -1, r: 10, terrain: FIELD },
  { q: 0, r: 10, terrain: FIELD },
  { q: 1, r: 10, terrain: FIELD },
  { q: 2, r: 10, terrain: FIELD },
  { q: 3, r: 10, terrain: WATER },
  { q: 4, r: 10, terrain: FIELD },
  { q: 5, r: 10, terrain: FIELD },
  { q: 6, r: 10, terrain: FIELD },
  { q: -5, r: 11, terrain: TREES },
  { q: -4, r: 11, terrain: TREES },
  { q: -3, r: 11, terrain: TREES },
  { q: -2, r: 11, terrain: TREES },
  { q: -1, r: 11, terrain: FIELD },
  { q: 0, r: 11, terrain: FIELD },
  { q: 1, r: 11, terrain: FIELD },
  { q: 2, r: 11, terrain: TREES },
  { q: 3, r: 11, terrain: WATER },
  { q: 4, r: 11, terrain: FIELD },
  { q: 5, r: 11, terrain: FIELD },
  { q: 6, r: 11, terrain: FIELD },
]