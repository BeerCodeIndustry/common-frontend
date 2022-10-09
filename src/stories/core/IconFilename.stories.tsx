import { storiesOf } from '@storybook/react'
import React from 'react'

import { IconFilename } from '../../lib/core'
import { IconSize, colors, iconsSizes, typographies } from '../../lib/theme'

storiesOf('Core', module).add(
  'IconFilename',
  (iconFileNameProps: any) => {
    return (
      <div>
        <IconFilename fullFilename='typescript.ts' {...iconFileNameProps} />
        <IconFilename
          fullFilename='typescript-react.tsx'
          {...iconFileNameProps}
        />
        <IconFilename fullFilename='javascript.js' {...iconFileNameProps} />
        <IconFilename fullFilename='react.jsx' {...iconFileNameProps} />
        <IconFilename fullFilename='json.json' {...iconFileNameProps} />
      </div>
    )
  },
  {
    component: IconFilename,
    args: {
      size: IconSize.SM,
    },
    argTypes: {
      color: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      typography: {
        options: Object.keys(typographies),
        control: { type: 'select' },
      },
      size: {
        options: Object.keys(iconsSizes),
        control: { type: 'select' },
      },
    },
  },
)
