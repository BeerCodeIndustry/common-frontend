import { colors } from './color'
import { breakpoints, spacings } from './layout'
import { typographies } from './typography'

export interface ThemeInterface {
  colors: typeof colors
  breakpoints: typeof breakpoints
  typographies: typeof typographies
  spacings: typeof spacings
}

export const Theme: ThemeInterface = {
  colors,
  breakpoints,
  typographies,
  spacings,
}
