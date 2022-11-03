import { storiesOf } from '@storybook/react'
import React from 'react'
import { NestedMenu } from 'src/lib/core/NestedMenu'

storiesOf('Core', module).add(
  'NestedMenu',
  (inputProps: any) => <NestedMenu {...inputProps} />,
  {
    component: NestedMenu,
    args: {
      dropdown: 'DropDown',
      arrayNested: [
        {
          label: 'HTML',
          nested: [
            {
              label: 'A',
              nested: [
                {
                  label: 'A1',
                },
                {
                  label: 'A2',
                },
              ],
            },
            {
              label: 'B',
            },
          ],
        },
        {
          label: 'CSS',
        },
        {
          label: 'JS',
          nested: [
            {
              label: 'C',
            },
            {
              label: 'D',
            },
          ],
        },
      ],
    },
    argTypes: {},
  },
)
