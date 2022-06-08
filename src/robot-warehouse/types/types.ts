export interface Coordinates {
  x: number,
  y: number,
}

export interface GridSize {
  width: number,
  height: number,
}

export enum Move {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W'
}
