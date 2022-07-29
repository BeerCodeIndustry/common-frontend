import React from 'react'
import { FlexboxContainer } from './Flexbox.styles'
import { FlexboxProps } from './Flexbox.types'

export const Flexbox: React.FC<FlexboxProps> = ({
  children,
  ...otherProps
}) => {
  return <FlexboxContainer {...otherProps}>{children}</FlexboxContainer>
}
