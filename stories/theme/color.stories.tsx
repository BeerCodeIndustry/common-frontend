import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { colors, Color, getColor } from '../../lib/theme/color'
import { Flexbox } from '../../lib/core/Flexbox'

const ColorBox = styled.div<{ color: Color }>`
  width: 25px;
  height: 25px;
  background-color: ${({ color }) => getColor(color)};
`

const ColorTitle = styled.span`
  width: 200px;
`

storiesOf('Theme', module).add('Colors', () => (
  <>
    {Object.keys(colors).map((color) => (
      <Flexbox gap={10}>
        <ColorTitle>{color}</ColorTitle>
        <ColorBox color={color as Color} />
      </Flexbox>
    ))}
  </>
))
