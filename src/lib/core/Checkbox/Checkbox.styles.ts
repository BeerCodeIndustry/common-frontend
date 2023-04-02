import { Color, getColor } from 'lib/theme'
import styled from 'styled-components'

import { CheckboxSize, getCheckboxSize } from './lib/utils'

export const Input = styled.label<{
  checkboxSize: CheckboxSize
  isRounded: boolean
  fillColor?: Color
}>`
  display: flex;
  ${({ checkboxSize }) => getCheckboxSize(checkboxSize)}
  ${({ isRounded }) => isRounded && 'border-radius: 50%;'}
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ fillColor }) =>
    fillColor ? getColor(fillColor) : 'transparent'};
  border-color: ${({ fillColor }) =>
    fillColor ? getColor(fillColor) : 'transparent'};
`
