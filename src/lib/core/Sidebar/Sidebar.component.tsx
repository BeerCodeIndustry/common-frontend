import React, { SyntheticEvent } from 'react'

import { Color } from '../../theme'
import { Content, Cross, Wrapper } from './Sidebar.styles'
import { SidebarProps } from './Sidebar.types'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  direction,
  children,
  sidebarColor,
  backgroundColor,
  onClose,
  crossColor = Color.GRAY_100,
  ...otherProps
}) => {
  const stopPropogation = (e: SyntheticEvent): void => {
    e.stopPropagation()
  }

  return (
    <Wrapper
      direction={direction}
      backgroundColor={backgroundColor}
      onClick={onClose}
      {...otherProps}
    >
      <Content
        isOpen={isOpen}
        direction={direction}
        sidebarColor={sidebarColor}
        onClick={stopPropogation}
      >
        <Cross onClick={onClose} crossColor={crossColor} />
        {children}
      </Content>
    </Wrapper>
  )
}
