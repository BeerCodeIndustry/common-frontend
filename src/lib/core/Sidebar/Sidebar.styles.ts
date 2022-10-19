import { Cross as CrossSVG } from '@beercode/common-icons'
import styled from 'styled-components'

import {
  ScreenSize,
  getColor,
  getDirection,
  getMediaQuery,
  getPosition,
} from '../../theme'
import { hide, show } from '../../theme/animations'
import { SidebarProps } from './Sidebar.types'

export const Wrapper = styled.div<{
  backgroundColor: SidebarProps['backgroundColor']
  sidebarDirection: SidebarProps['sidebarDirection']
}>`
  display: flex;
  cursor: pointer;
  position: fixed;
  justify-content: ${({ sidebarDirection }) => getPosition(sidebarDirection)};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  user-select: none;
  background: ${({ backgroundColor }) => getColor(backgroundColor)};
`

export const Content = styled.div<{
  sidebarColor: SidebarProps['sidebarColor']
  sidebarDirection: SidebarProps['sidebarDirection']
  isOpen: SidebarProps['isOpen']
}>`
  position: relative;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  background: ${({ sidebarColor }) => getColor(sidebarColor)};
  width: 18.75rem;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    width: 100%;
  }
  animation: ${({ sidebarDirection, isOpen }) =>
      isOpen
        ? show(getDirection(sidebarDirection))
        : hide(getDirection(sidebarDirection))}
    250ms ease 0s 1 normal forwards;
`

export const Cross = styled(CrossSVG)<{
  crossColor: SidebarProps['crossColor']
}>`
  user-select: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  line {
    stroke: ${({ crossColor }) => getColor(crossColor)};
  }
`
