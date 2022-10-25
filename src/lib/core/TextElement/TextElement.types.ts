import { AnyColorWithOpacity, Typography } from '../../theme'

export interface TextElementProps {
  typography?: Typography
  color?: AnyColorWithOpacity
  hover?: AnyColorWithOpacity
  hasCursor?: boolean
}
