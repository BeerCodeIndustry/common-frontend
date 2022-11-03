import styled from 'styled-components'
import { ChevronDown, ChevronRight } from '@beercode/common-icons'
import { Flexbox } from '../Flexbox'

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  color: #000;
  list-style: none;
`
export const ButtonDrop = styled.a`
  display: block;
  color: #fff;
`
export const ButtonLink = styled.a`
  display: block;
  color: #000;
  &:hover {
    transition: 1s;
    color: #259942;
    cursor: pointer;
  }
`
export const DropMenu = styled.div`
  position: absolute;
  top: 100%;
  background-color: #000;
  color: #fff;
`
export const DropMenuRight = styled.div`
  position: absolute;
  top: 0;
  left: 101%;
  background-color: #000;
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
