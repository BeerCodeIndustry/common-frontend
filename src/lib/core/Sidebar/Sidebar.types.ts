import { ReactNode } from 'react'

import { Color, ColorWithOpacity, Position } from '../../theme'

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean
  sidebarDirection: Position
  sidebarColor: Color | ColorWithOpacity
  backgroundColor: Color | ColorWithOpacity
  children: ReactNode
  onClose: () => void
  crossColor?: Color | ColorWithOpacity
}
