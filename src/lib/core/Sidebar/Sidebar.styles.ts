import { Cross as CrossSVG } from '@beercode/common-icons'
import styled from 'styled-components'

import { ScreenSize, getColor, getMediaQuery } from '../../theme'
import { SidebarProps } from './Sidebar.types'

export const Content = styled.div<{
  sidebarColor: SidebarProps['sidebarColor']
  direction: SidebarProps['direction']
}>`
  position: fixed;
  ${({ direction }) => `${direction}: 0;`}
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  background: ${({ sidebarColor }) => getColor(sidebarColor)};
  width: 16rem;
  height: 100vh;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    width: 100%;
  }
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
