import { Cross as CrossSVG } from '@beercode/common-icons'
import styled from 'styled-components'

import {
  ModalSize,
  ScreenSize,
  getColor,
  getMediaQuery,
  getModalSize,
} from '../../theme'
import { ModalProps } from './Modal.types'

export const Wrapper = styled.div<{
  backgroundColor: ModalProps['backgroundColor']
}>`
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
  user-select: none;
  background: ${({ backgroundColor }) => getColor(backgroundColor)};
`

export const Content = styled.div<{
  size: ModalProps['size']
  modalColor: ModalProps['modalColor']
}>`
  position: relative;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  background: ${({ modalColor }) => getColor(modalColor)};
  width: ${({ size }) => getModalSize(size)};
  ${getMediaQuery(ScreenSize.SMALL, ScreenSize.MEDIUM)} {
    width: ${getModalSize(ModalSize.SMALL)};
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    width: 100%;
  }
`

export const Cross = styled(CrossSVG)<{ crossColor: ModalProps['crossColor'] }>`
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
