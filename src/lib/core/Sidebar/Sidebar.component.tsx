import React, { SyntheticEvent } from 'react'

import { Color } from '../../theme'
import { Content, Cross, Wrapper } from './Sidebar.styles'
import { SidebarProps } from './Sidebar.types'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  sidebarDirection,
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
      sidebarDirection={sidebarDirection}
      backgroundColor={backgroundColor}
      onClick={onClose}
      {...otherProps}
    >
      <Content
        isOpen={isOpen}
        sidebarDirection={sidebarDirection}
        sidebarColor={sidebarColor}
        onClick={stopPropogation}
      >
        <Cross onClick={onClose} crossColor={crossColor} />
        {children}
      </Content>
    </Wrapper>
  )
}
