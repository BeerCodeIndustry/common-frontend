import React from 'react'
import { useToggle } from '@beercode/common-utils'
import {
  ButtonDrop,
  Menu,
  DropArr,
  DownArrow,
  UpArrow,
  FlexboxLink,
} from './NestedMenu.styles'
import {
  NestedMenuProps,
  NestedArrayType,
  NestedLinksType,
  RenderNestedMenuType,
} from './NestedMenu.types'

export const RenderNestedMenu: React.FC<RenderNestedMenuType> = ({
  nested,
}) => {
  return (
    <>
      {nested?.map(arr =>
        Array.isArray(arr.nested) ? (
          <NestedArray {...arr} />
        ) : (
          <NestedLinks {...arr} />
        ),
      )}
    </>
  )
}

export const NestedArray: React.FC<NestedArrayType> = ({ label, nested }) => {
  const [isOpen, toggleOpen] = useToggle(false)
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    toggleOpen()
    e.stopPropagation()
  }

  return (
    <>
      <FlexboxLink onClick={onClick}>
        <ButtonDrop>{label}</ButtonDrop>
        {isOpen ? <DownArrow /> : <UpArrow />}
      </FlexboxLink>
      <DropArr>{isOpen && <RenderNestedMenu nested={nested} />}</DropArr>
    </>
  )
}

export const NestedLinks: React.FC<NestedLinksType> = ({ label }) => {
  return (
    <FlexboxLink>
      <ButtonDrop>{label}</ButtonDrop>
    </FlexboxLink>
  )
}

export const NestedMenu: React.FC<NestedMenuProps> = ({
  arrayNested,
  dropdown,
}) => {
  const [isOpen, toggleOpen] = useToggle(false)
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    toggleOpen()
    e.stopPropagation()
  }

  return (
    <>
      <FlexboxLink onClick={onClick}>
        <ButtonDrop>{dropdown}</ButtonDrop>
        {isOpen ? <DownArrow /> : <UpArrow />}
      </FlexboxLink>
      <Menu>{isOpen && <RenderNestedMenu nested={arrayNested} />}</Menu>
    </>
  )
}
