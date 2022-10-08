import React from 'react'

import { Span } from './TextElement.styles'
import { TextElementProps } from './TextElement.types'

export const TextElement: React.FC<TextElementProps> = ({
  children,
  typography,
  color,
}) => {
  return (
    <Span typography={typography} color={color}>
      {children}
    </Span>
  )
}
