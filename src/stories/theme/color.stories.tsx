import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { Flexbox } from '../../lib/core'
import {
  Color,
  getColor,
  Typography,
  getTypography,
  colors,
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
    {Object.keys(colors).map((color) => (
      <Flexbox>
        <ColorTitle>{color}</ColorTitle>
        <ColorBox color={color as Color} />
      </Flexbox>
    ))}
  </>
))
