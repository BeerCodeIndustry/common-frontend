import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

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
      onClose: action('modal close'),
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
      onClose: { action: 'clicked' },
    },
  }
)
