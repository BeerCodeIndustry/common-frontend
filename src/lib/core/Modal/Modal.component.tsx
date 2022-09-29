import React, { SyntheticEvent } from 'react'
import { Color } from '../../theme'

import { Wrapper, Content, Cross } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal: React.FC<ModalProps> = ({
  size,
  children,
  modalColor,
  backgroundColor,
  onClose,
  crossColor = Color.GRAY_100,
  ...otherProps
}) => {
  const stopPropogation = (e: SyntheticEvent): void => {
    e.stopPropagation()
  }

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      onClick={onClose}
      {...otherProps}
    >
      <Content size={size} modalColor={modalColor} onClick={stopPropogation}>
        <Cross onClick={onClose} crossColor={crossColor} />
        {children}
      </Content>
    </Wrapper>
  )
}
