import { Color } from 'lib/theme'

import { CheckboxSize } from './lib/utils'

export interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  checkboxSize?: CheckboxSize
  isRounded?: boolean
  checked?: boolean
  onCheck?: (isChecked: boolean) => void
  fillColor?: Color
  arrowColor?: Color
}
