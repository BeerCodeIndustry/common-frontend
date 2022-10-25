import { ReactNode } from 'react'

import { Color, ColorWithOpacity } from '../../theme'

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean
  direction: 'left' | 'right'
  sidebarColor: Color | ColorWithOpacity
  children: ReactNode
  onClose: () => void
  crossColor?: Color | ColorWithOpacity
}
