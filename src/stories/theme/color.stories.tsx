import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Flexbox } from '../../lib/core'
import {
  Color,
  Typography,
  colors,
  getColor,
  getTypography,
} from '../../lib/theme'

const ColorBox = styled.div<{ color: Color }>`
  width: 10rem;
  height: 2.5rem;
  background-color: ${({ color }) => getColor(color)};
`

const ColorTitle = styled.div`
  width: 12.5rem;
  ${getTypography(Typography.BASE)}
`

storiesOf('Theme', module).add('Colors', () => (
  <>
    {Object.keys(colors).map(color => (
      <Flexbox>
        <ColorTitle>
          {color}({getColor(color as Color)})
        </ColorTitle>
        <ColorBox color={color as Color} />
      </Flexbox>
    ))}
  </>
))
