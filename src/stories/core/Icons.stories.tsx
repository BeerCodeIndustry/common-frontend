import { common, filetype, social } from '@beercode/common-icons'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Flexbox, Icon as IconCore, TextElement } from '../../lib/core'
import {
  Color,
  IconSize,
  Typography,
  colors,
  iconsSizes,
} from '../../lib/theme'

const IconBox = styled(Flexbox)``

const icons: Record<string, Record<string, React.FC>> = {
  Common: common,
  Social: social,
  Filetype: filetype,
}

storiesOf('Core', module).add(
  'Icons',
  (iconProps: any) => {
    return (
      <Flexbox gap={5}>
        {Object.entries(icons).map(([title, nsIcons]) => (
          <div>
            <TextElement typography={Typography.XL_2} color={Color.NEUTRAL_400}>
              {title}
            </TextElement>
            {Object.entries(nsIcons).map(([iconName, Icon]) => (
              <IconBox alignItems='center' gap={1}>
                <TextElement typography={Typography.XL}>{iconName}</TextElement>
                <IconCore {...iconProps}>
                  <Icon />
                </IconCore>
              </IconBox>
            ))}
          </div>
        ))}
      </Flexbox>
    )
  },
  {
    component: IconCore,
    args: {
      size: IconSize.BASE,
    },
    argTypes: {
      size: {
        options: Object.keys(iconsSizes),
        control: { type: 'select' },
      },
      color: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
    },
  },
)
