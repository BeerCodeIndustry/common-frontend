import React from 'react'
import { useToggle } from '@beercode/common-utils'
import { Flexbox } from '../Flexbox'
import {
  ButtonDrop,
  Menu,
  DownArrow,
  UpArrow,
  FlexboxLink,
  DropMenu,
  DropMenuRight,
  ButtonLink,
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
      <DropMenuRight>
        {isOpen && <RenderNestedMenu nested={nested} />}
      </DropMenuRight>
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

export const NestedMenu: React.FC<NestedMenuProps> = ({ arrayNested }) => {
  const [isOpen, toggleOpen] = useToggle(false)
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    toggleOpen()
    e.stopPropagation()
  }

  return (
    <Menu>
      {arrayNested.map(links =>
        Array.isArray(links.nested) ? (
          <Flexbox>
            <Flexbox onClick={onClick}>
              <ButtonLink>{links.label}</ButtonLink>
              {isOpen ? <DownArrow /> : <UpArrow />}
              <DropMenu>
                {isOpen && <RenderNestedMenu nested={links.nested} />}
              </DropMenu>
            </Flexbox>
          </Flexbox>
        ) : (
          <ButtonLink>{links.label}</ButtonLink>
        ),
      )}
    </Menu>
  )
}
