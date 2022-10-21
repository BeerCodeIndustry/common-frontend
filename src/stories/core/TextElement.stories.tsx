import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextElement } from '../../lib/core'
import { colors, typographies } from '../../lib/theme'

storiesOf('Core', module).add(
  'TextElement',
  (textElementProps: any) => (
    <TextElement {...textElementProps}>TextElement</TextElement>
  ),
  {
    component: TextElement,
    argTypes: {
      color: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      typography: {
        options: Object.keys(typographies),
        control: { type: 'select' },
      },
      hover: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      hasCursor: {
        control: 'boolean',
      },
    },
  },
)
