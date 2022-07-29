import { ReactNode } from 'react'
import { ModalSize } from '../../theme/layout'
import { Color } from '../../theme/color'

export interface ModalProps {
  size: ModalSize
  modalBackgroundColor: Color
  backgroundColor: Color
  children: ReactNode
}
