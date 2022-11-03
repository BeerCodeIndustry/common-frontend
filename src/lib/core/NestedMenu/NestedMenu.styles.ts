import styled from 'styled-components'
import { ChevronDown, ChevronRight } from '@beercode/common-icons'
import { colors } from 'src/lib/theme'
import { Flexbox } from '../Flexbox'

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  color: ${colors.BLACK};
  list-style: none;
`
export const ButtonDrop = styled.a`
  display: block;
  color: ${colors.WHITE};
`
export const ButtonLink = styled.a`
  display: block;
  color: ${colors.BLACK};
  &:hover {
    transition: 1s;
    color: ${colors.ORANGE_600};
    cursor: pointer;
  }
`
export const DropMenu = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
`
export const DropMenuRight = styled.div`
  position: absolute;
  top: 0;
  left: 101%;
  background-color: ${colors.BLACK};
`
export const DownArrow = styled(ChevronRight)`
  width: 0.5rem;
`
export const UpArrow = styled(ChevronDown)`
  width: 0.5rem;
`
export const FlexboxLink = styled(Flexbox)`
  padding: 1rem 1rem;
  &:hover {
    cursor: pointer;
  }
`
