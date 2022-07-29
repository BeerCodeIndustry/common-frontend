import { ReactNode } from 'react'

import { Color } from '../../theme/color'
import { ModalSize } from '../../theme/layout'

export interface ModalProps {
  size: ModalSize
  modalBackgroundColor: Color
  backgroundColor: Color
  children: ReactNode
  onClose: () => void
}
