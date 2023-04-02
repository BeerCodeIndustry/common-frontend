import { ArrowChecked } from '@beercode/common-icons'
import React, { MouseEvent, useEffect, useState } from 'react'

import { Icon } from '../Icon'
import { Input } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox: React.FC<CheckboxProps> = ({
  checkboxSize = 'MEDIUM',
  isRounded = false,
  checked = false,
  onCheck,
  arrowColor,
  fillColor,
  ...props
}) => {
  const [isChecked, setChecked] = useState(checked)

  useEffect(() => {
    setChecked(checked)
  }, [checked])

  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    if (onCheck) onCheck(e, isChecked)
    setChecked(!isChecked)
  }

  return (
    <div {...props}>
      <Input
        {...{ isRounded, checkboxSize, fillColor }}
        htmlFor='checkbox'
        onClick={handleClick}
      >
        {isChecked && (
          <Icon size='SM' color={arrowColor}>
            <ArrowChecked />
          </Icon>
        )}
      </Input>

      <input type='checkbox' id='checkbox' style={{ display: 'none' }} />
    </div>
  )
}
