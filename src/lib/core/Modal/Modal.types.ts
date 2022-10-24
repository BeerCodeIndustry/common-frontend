import { ReactNode } from 'react'

import { AnyColor, ModalSize } from '../../theme'

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  size: ModalSize
  modalColor: AnyColor
  backgroundColor: AnyColor
  children: ReactNode
  onClose: () => void
  crossColor?: AnyColor
}
