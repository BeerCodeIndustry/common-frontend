import { ReactNode } from 'react'

import { AnyColorWithOpacity, ModalSize } from '../../theme'

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  size: ModalSize
  modalColor: AnyColorWithOpacity
  backgroundColor: AnyColorWithOpacity
  children: ReactNode
  onClose: () => void
  crossColor?: AnyColorWithOpacity
}
