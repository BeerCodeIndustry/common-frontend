import { storiesOf } from '@storybook/react'
import React from 'react'
import { NestedMenu } from 'src/lib/core/NestedMenu'

storiesOf('Core', module).add(
  'NestedMenu',
  (inputProps: any) => <NestedMenu {...inputProps} />,
  {
    component: NestedMenu,
    args: {
      arrayNested: [
        {
          label: 'Practicum',
          nested: [
            {
              label: 'HTML',
              nested: [
                {
                  label: 'A',
                },
                {
                  label: 'A',
                },
              ],
            },
            {
              label: 'CSS',
            },
          ],
        },
        {
          label: 'IDE',
        },
        {
          label: 'About Us',
        },
      ],
    },
    argTypes: {},
  },
)
