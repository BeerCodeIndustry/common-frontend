import React from 'react'
import { storiesOf } from '@storybook/react'

import { Modal } from '../../lib/core/Modal'
import { Color, colors } from '../../lib/theme/color'
import { ModalSize, modalSizes } from '../../lib/theme/layout'

storiesOf('Core', module).add(
  'Modal',
  (args: any) => (
    <Modal {...args}>
      <span>ModalContent</span>
    </Modal>
  ),
  {
    component: Modal,
    args: {
      size: ModalSize.SMALL,
      modalBackgroundColor: Color.BLUE_200,
      backgroundColor: Color.BLACK,
    },
    argTypes: {
      size: {
        options: Object.keys(modalSizes),
        control: { type: 'select' },
      },
      backgroundColor: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
      modalBackgroundColor: {
        options: Object.keys(colors),
        control: { type: 'select' },
      },
    },
  }
)
