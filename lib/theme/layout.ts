import { pixelate } from './helpers'

export enum ScreenSize {
  MOBAIL = 'MOBAIL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  MAX = 'MAX',
}

export enum ModalSize {
  MOBAIL = 'MOBAIL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export const getModalSizeAsPixels = (t: ModalSize): string => {
  return pixelate(modalSizes[t])
}

export const getMediaQuery = (
  minWidth: ScreenSize,
  maxWidth?: ScreenSize
): string => {
  return `@media screen and (min-width: ${pixelate(breakpoints[minWidth])}) ${
    maxWidth ? `and (max-width: ${pixelate(breakpoints[maxWidth])})` : ''
  }`
}

const breakpoints: { [key in ScreenSize]: number } = {
  [ScreenSize.MOBAIL]: 0,
  [ScreenSize.SMALL]: 540,
  [ScreenSize.MEDIUM]: 768,
  [ScreenSize.LARGE]: 1024,
  [ScreenSize.XLARGE]: 1400,
  [ScreenSize.MAX]: 1920,
}

export const modalSizes: { [key in ModalSize]: number } = {
  [ModalSize.MOBAIL]: 400,
  [ModalSize.SMALL]: 500,
  [ModalSize.MEDIUM]: 700,
  [ModalSize.LARGE]: 900,
  [ModalSize.XLARGE]: 1100,
}
