import styled from 'styled-components'
import { getFont } from '../../theme/font'

import { getTypography } from '../../theme/typography'
import { FontTypeTextProps } from './FontTypoText.types'

export const FontTypoText = styled.span<FontTypeTextProps>`
  ${({ typo }) => getTypography(typo)}
  font-family: ${({ font }) => getFont(font)};
`
