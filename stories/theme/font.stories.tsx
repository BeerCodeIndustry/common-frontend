import { storiesOf } from '@storybook/react'
import React from 'react'

import { Flexbox } from '../../lib/core/Flexbox'
import { FontTypoText } from '../../lib/core/FontTypoText'
import { Font, fonts } from '../../lib/theme/font'

storiesOf('Theme', module).add('Fonts', () => (
  <Flexbox flexDirection="column">
    {Object.keys(fonts).map((font) => (
      <FontTypoText font={font as Font}>{font}</FontTypoText>
    ))}
  </Flexbox>
))
