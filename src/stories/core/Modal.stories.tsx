import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Modal } from '../../lib/core'
import { Color, ModalSize, colors, modalSizes } from '../../lib/theme'

storiesOf('Core', module).add(
  'Modal',
  (modalProps: any) => (
    <Modal {...modalProps}>
      <span>ModalContent</span>
    </Modal>
  ),
  {
    component: Modal,
    args: {
      size: ModalSize.SMALL,
      modalColor: Color.BLUE_200,
      backgroundColor: Color.BLACK,
      onClose: action('modal close'),
      crossColor: Color.GRAY_100,
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
      modalColor: {
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
