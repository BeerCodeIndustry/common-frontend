import styled from 'styled-components'

import { getColor, getTypography } from '../../theme'
import { TextElementProps } from './TextElement.types'

export const Span = styled.span<Omit<TextElementProps, 'children'>>`
  ${({ color }) => color && `color: ${getColor(color)};`}
  ${({ typography }) => typography && getTypography(typography)}
`
