export enum Position {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const getPosition = (position?: Position): string => {
  if (!position) return positions.RIGHT

  return positions[position]
}

export const getDirection = (direction?: Position): string => {
  if (!direction) return directions.RIGHT

  return directions[direction]
}

export const positions: Record<Position, string> = {
  [Position.LEFT]: 'start',
  [Position.RIGHT]: 'end',
}

export const directions: Record<Position, string> = {
  [Position.LEFT]: '-15.625rem',
  [Position.RIGHT]: '15.625rem',
}
