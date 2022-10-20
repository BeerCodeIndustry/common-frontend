import React, { SyntheticEvent } from 'react'

import { Color } from '../../theme'
import { Content, Cross } from './Sidebar.styles'
import { SidebarProps } from './Sidebar.types'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  direction,
  children,
  sidebarColor,
  onClose,
  crossColor = Color.GRAY_100,
}) => {
  const stopPropogation = (e: SyntheticEvent): void => {
    e.stopPropagation()
  }

  return (
    <>
      {isOpen && (
        <Content
          direction={direction}
          sidebarColor={sidebarColor}
          onClick={stopPropogation}
        >
          <Cross onClick={onClose} crossColor={crossColor} />
          {children}
        </Content>
      )}
    </>
  )
}
