import React from 'react'

import { FlexboxProps } from './Flexbox.types'
import { FlexboxContainer } from './Flexbox.styles'

export const Flexbox: React.FC<FlexboxProps> = ({
  children,
  ...otherProps
}) => {
  return <FlexboxContainer {...otherProps}>{children}</FlexboxContainer>
}
