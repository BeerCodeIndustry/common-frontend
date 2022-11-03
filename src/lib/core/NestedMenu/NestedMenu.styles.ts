import styled from 'styled-components'
import { ChevronDown, ChevronRight } from '@beercode/common-icons'
import { Flexbox } from '../Flexbox'

export const Menu = styled.div`
  margin-top: 0.5rem;
  color: #000;
`
export const ButtonDrop = styled.a`
  color: #000;
`
export const DropArr = styled.div`
  margin-left: 3rem;
  width: 4.5rem;
  color: #000;
`
export const DropMenu = styled.div`
  margin-top: 3rem;
  width: 4.5rem;
  color: #000;
`
export const DownArrow = styled(ChevronRight)`
  width: 0.5rem;
`
export const UpArrow = styled(ChevronDown)`
  width: 0.5rem;
`
export const FlexboxLink = styled(Flexbox)`
  &:hover {
    cursor: pointer;
    ${ButtonDrop} {
      transition: 1s;
      color: #259942;
      cursor: pointer;
    }
  }
`
