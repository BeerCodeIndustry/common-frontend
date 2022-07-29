import { ReactNode } from 'react'
import { Font } from '../../theme/font'
import { Typography } from '../../theme/typography'

export interface FontTypeTextProps {
  children: ReactNode
  typo?: Typography
  font?: Font
}
