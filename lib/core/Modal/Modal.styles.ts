import styled from 'styled-components'
import {
  getColorWithOpacity,
  getColor,
  Color,
  Opacity,
} from '../../theme/color'
import {
  getMediaQuery,
  ScreenSize,
  getModalSizeAsPixels,
  ModalSize,
} from '../../theme/layout'
import { cross } from '@beer-code-industry/common-icons'

export const Wrapper = styled.div<{ backgroundColor: Color }>`
  display: flex;
  cursor: pointer;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background: ${({ backgroundColor }) =>
    getColorWithOpacity(backgroundColor, Opacity._80)};
`

export const Content = styled.div<{
  size: ModalSize
  modalBackgroundColor: Color
}>`
  position: relative;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  background: ${({ modalBackgroundColor }) => getColor(modalBackgroundColor)};
  width: ${({ size }) => getModalSizeAsPixels(size)};
  ${getMediaQuery(ScreenSize.SMALL, ScreenSize.MEDIUM)} {
    width: ${getModalSizeAsPixels(ModalSize.SMALL)};
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    width: 100%;
  }
`

export const Cross = styled(cross)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  line {
    stroke: ${getColor(Color.GRAY_100)};
  }
  :hover {
    line {
      stroke: ${getColor(Color.WHITE)};
    }
  }
`
