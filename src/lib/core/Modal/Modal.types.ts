import { ReactNode } from 'react'

import { Color, ColorWithOpacity, ModalSize } from '../../theme'

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  size: ModalSize
  modalColor: Color | ColorWithOpacity
  backgroundColor: Color | ColorWithOpacity
  children: ReactNode
  onClose: () => void
  crossColor?: Color | ColorWithOpacity
}
