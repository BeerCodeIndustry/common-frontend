import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { typographies, getTypography, Typography } from '../../lib/theme'

const TypographyBlock = styled.div<{ typography: Typography }>`
  ${({ typography }) => getTypography(typography)}
`

storiesOf('Theme', module).add('Typographies', () => (
  <>
    {Object.keys(typographies).map((typo) => (
      <TypographyBlock typography={typo as Typography}>{typo}</TypographyBlock>
    ))}
  </>
))
