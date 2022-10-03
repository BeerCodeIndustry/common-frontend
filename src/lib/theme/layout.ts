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

export enum SpacingType {
  XSMALL = 'MIN',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export const getModalSize = (m: ModalSize): string => {
  return modalSizes[m]
}

export const getMediaQuery = (
  minWidth: ScreenSize,
  maxWidth?: ScreenSize,
): string => {
  return `@media screen and (min-width: ${breakpoints[minWidth]}) ${
    maxWidth ? `and (max-width: ${breakpoints[maxWidth]})` : ''
  }`
}

export const breakpoints: Record<ScreenSize, string> = {
  [ScreenSize.MOBAIL]: pixelate(0),
  [ScreenSize.SMALL]: pixelate(540),
  [ScreenSize.MEDIUM]: pixelate(768),
  [ScreenSize.LARGE]: pixelate(1024),
  [ScreenSize.XLARGE]: pixelate(1400),
  [ScreenSize.MAX]: pixelate(1920),
}

export const modalSizes: Record<ModalSize, string> = {
  [ModalSize.MOBAIL]: pixelate(400),
  [ModalSize.SMALL]: pixelate(500),
  [ModalSize.MEDIUM]: pixelate(700),
  [ModalSize.LARGE]: pixelate(900),
  [ModalSize.XLARGE]: pixelate(1100),
}

export const spacings: Record<SpacingType, string> = {
  [SpacingType.XSMALL]: pixelate(4),
  [SpacingType.SMALL]: pixelate(8),
  [SpacingType.MEDIUM]: pixelate(16),
  [SpacingType.LARGE]: pixelate(24),
  [SpacingType.XLARGE]: pixelate(32),
}
