import { storiesOf } from '@storybook/react'
import { Checkbox } from 'lib/core'
import React from 'react'

storiesOf('Core', module).add('Checkbox', () => {
  return <Checkbox isRounded arrowColor='WHITE' fillColor='VIOLET_700' />
})
