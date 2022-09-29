import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Typography, getTypography, typographies } from '../../lib/theme'

const TypographyBlock = styled.div<{ typography: Typography }>`
  ${({ typography }) => getTypography(typography)}
`

storiesOf('Theme', module).add('Typographies', () => (
  <>
    {Object.keys(typographies).map(typo => (
      <TypographyBlock typography={typo as Typography}>{typo}</TypographyBlock>
    ))}
  </>
))
