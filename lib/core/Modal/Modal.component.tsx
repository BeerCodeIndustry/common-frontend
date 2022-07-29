import { Wrapper, Content, Cross } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal: React.FC<ModalProps> = ({
  size,
  children,
  modalBackgroundColor,
  backgroundColor,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Content size={size} modalBackgroundColor={modalBackgroundColor}>
        <Cross />
        {children}
      </Content>
    </Wrapper>
  )
}
