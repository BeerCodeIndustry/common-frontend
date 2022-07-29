import { storiesOf } from '@storybook/react'
import React from 'react'

import { Flexbox } from '../../lib/core/Flexbox'
import { FontTypoText } from '../../lib/core/FontTypoText'
import { Font, fonts } from '../../lib/theme/font'
import { Typography, typographies } from '../../lib/theme/typography'

const Container: React.FC<{ font: Font }> = ({ font }) => {
  return (
    <Flexbox flexDirection="column">
      {Object.keys(typographies).map((typo) => (
        <FontTypoText font={font} typo={typo as Typography}>
          {typo}
        </FontTypoText>
      ))}
    </Flexbox>
  )
}

storiesOf('Theme', module).add(
  'Typographies',
  (args: any) => <Container {...args} />,
  {
    component: Container,
    args: {
      font: Font.COMFORTAA_MEDIUM,
    },
    argTypes: {
      font: {
        options: Object.keys(fonts),
        control: { type: 'select' },
      },
    },
  }
)
