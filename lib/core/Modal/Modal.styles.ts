import styled from 'styled-components'
import {
  getColorWithOpacity,
  getColor,
  Color,
  Opacity,
} from '../../theme/color'
import { getMediaQuery, ScreenSize } from '../../theme/layout'

export const Wrapper = styled.div`
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
  background: ${getColorWithOpacity(Color.BLACK, Opacity._90)};
`

export const Content = styled.div`
  position: relative;
  border-radius: 0.5rem;
  padding: 2rem 2rem;
`
