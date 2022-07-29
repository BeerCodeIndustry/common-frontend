import React, { SyntheticEvent } from 'react'
import { Wrapper, Content, Cross } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal: React.FC<ModalProps> = ({
  size,
  children,
  modalBackgroundColor,
  backgroundColor,
  onClose,
}) => {
  const stopPropogation = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={onClose}>
      <Content
        size={size}
        modalBackgroundColor={modalBackgroundColor}
        onClick={stopPropogation}
      >
        <Cross onClick={onClose} />
        {children}
      </Content>
    </Wrapper>
  )
}
