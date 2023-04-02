import { FlattenSimpleInterpolation, css } from 'styled-components'

export const CheckboxSize = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const
export type CheckboxSize = typeof CheckboxSize[keyof typeof CheckboxSize]

export const getCheckboxSize = (
  s: CheckboxSize,
): FlattenSimpleInterpolation => {
  return sizes[s]
}

export const sizes: Record<CheckboxSize, FlattenSimpleInterpolation> = {
  [CheckboxSize.SMALL]: css`
    width: 1rem;
    height: 1rem;
  `,
  [CheckboxSize.MEDIUM]: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
  [CheckboxSize.LARGE]: css`
    width: 2rem;
    height: 2rem;
  `,
}
