import styled from 'styled-components'

import { getColor, getTypography } from '../../theme'
import { TextElementProps } from './TextElement.types'

export const TextElement = styled.span<TextElementProps>`
  ${({ color }) => color && `color: ${getColor(color)};`}
  ${({ typography }) => typography && getTypography(typography)}
`
