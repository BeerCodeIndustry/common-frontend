import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Sidebar } from 'src/lib/core/Sidebar'

import { Color, colors } from '../../lib/theme'

storiesOf('Core', module).add(
  'Sidebar',
  (sidebarProps: any) => <Sidebar {...sidebarProps} />,
  {
    component: Sidebar,
    args: {
      isOpen: true,
      direction: 'end',
      sidebarColor: Color.BLUE_200,
      backgroundColor: Color.BLACK,
      onClose: action('modal close'),
      crossColor: Color.GRAY_100,
      children: <span>SidebarContent</span>,
    },
    argTypes: {
      direction: {
        options: ['start', 'end'],
        control: { type: 'select' },
      },
      backgroundColor: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      sidebarColor: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      onClose: { action: 'clicked' },
      crossColor: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
    },
  },
)
