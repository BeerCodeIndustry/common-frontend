import { common, special, social } from '@beer-code-industry/common-icons'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Flexbox } from '../../lib/core/Flexbox'
import { FontTypoText } from '../../lib/core/FontTypoText'
import { Font } from '../../lib/theme/font'
import { Typography } from '../../lib/theme/typography'

const data = [
  {
    name: 'Common',
    icons: common,
  },
  {
    name: 'Special',
    icons: special,
  },
  {
    name: 'Social',
    icons: social,
  },
]

const Icon = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`

const IconBox: React.FC<{ title: string; IconSVG: React.FC }> = ({
  title,
  IconSVG,
}) => {
  return (
    <Flexbox gap={10}>
      <FontTypoText typo={Typography.HEADING_3} font={Font.COMFORTAA_MEDIUM}>
        {title}
      </FontTypoText>
      <Icon>
        <IconSVG />
      </Icon>
    </Flexbox>
  )
}

storiesOf('Core', module).add('Icons', () => (
  <Flexbox justifyContent="space-around">
    {data.map((icons) => (
      <Flexbox flexDirection="column" gap={10}>
        <FontTypoText typo={Typography.HEADING_2} font={Font.COMFORTAA_MEDIUM}>
          {icons.name}
        </FontTypoText>
        <Flexbox flexDirection="column" gap={5}>
          {Object.entries(icons.icons).map((i) => (
            <IconBox title={i[0]} IconSVG={i[1]} />
          ))}
        </Flexbox>
      </Flexbox>
    ))}
  </Flexbox>
))
