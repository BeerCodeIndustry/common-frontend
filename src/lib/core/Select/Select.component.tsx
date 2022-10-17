import React from 'react'
import ReactSelect from 'react-select'

import { SelectProps } from './Select.types'

export const Select: React.FC<SelectProps> = props => {
  return <ReactSelect {...props} />
}
