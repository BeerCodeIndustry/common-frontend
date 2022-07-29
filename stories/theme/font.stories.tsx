import React from 'react'
import { storiesOf } from '@storybook/react'
import { Font, fonts } from '../../lib/theme/font'
import { Flexbox } from '../../lib/core/Flexbox'
import { FontTypoText } from '../../lib/core/FontTypoText'

storiesOf('Theme', module).add('Fonts', () => (
  <Flexbox flexDirection="column">
    {Object.keys(fonts).map((font) => (
      <FontTypoText font={font as Font}>{font}</FontTypoText>
    ))}
  </Flexbox>
))
