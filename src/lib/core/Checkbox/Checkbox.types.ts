import { MouseEvent } from 'react'

import { Color } from '../../theme'
import { CheckboxSize } from './lib/utils'

export interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  checkboxSize?: CheckboxSize
  isRounded?: boolean
  checked?: boolean
  onCheck?: (e: MouseEvent<HTMLElement>, isChecked: boolean) => void
  fillColor?: Color
  arrowColor?: Color
}
