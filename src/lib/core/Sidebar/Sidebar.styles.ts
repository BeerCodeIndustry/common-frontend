import { Cross as CrossSVG } from '@beercode/common-icons'
import styled from 'styled-components'

import { ScreenSize, getColor, getMediaQuery } from '../../theme'
import { show } from '../../theme/animations'
import { SidebarProps } from './Sidebar.types'

export const Wrapper = styled.div<{
  backgroundColor: SidebarProps['backgroundColor']
  direction: SidebarProps['direction']
}>`
  display: flex;
  cursor: pointer;
  position: fixed;
  justify-content: ${({ direction }) => direction};
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
  direction: SidebarProps['direction']
  isOpen: SidebarProps['isOpen']
}>`
  position: relative;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  background: ${({ sidebarColor }) => getColor(sidebarColor)};
  width: 15.625rem;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    width: 100%;
  }
  animation: ${({ direction, isOpen }) =>
      isOpen
        ? show(direction === 'end' ? '20rem' : '-20rem', '0')
        : show('0', direction === 'end' ? '20rem' : '-20rem')}
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
