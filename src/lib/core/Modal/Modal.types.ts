import { ReactNode } from 'react'

import { ModalSize, Color } from '../../theme'

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  size: ModalSize
  modalColor: Color
  backgroundColor: Color
  children: ReactNode
  onClose: () => void
  crossColor?: Color
}
