import { common, filetype, social } from '@beercode/common-icons'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Flexbox, TextElement } from '../../lib/core'
import { Color, Typography } from '../../lib/theme'

const IconBox = styled(Flexbox)`
  svg {
    width: 2rem;
    height: 2rem;
  }
`

const icons: Record<string, Record<string, React.FC>> = {
  Common: common,
  Social: social,
  Filetype: filetype,
}

storiesOf('Core', module).add('Icons', () => {
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
              <Icon />
            </IconBox>
          ))}
        </div>
      ))}
    </Flexbox>
  )
})
