import { ReactNode } from 'react'

import { Color, Typography } from '../../theme'

export interface TextElementProps {
  children: ReactNode
  typography?: Typography
  color?: Color
}
