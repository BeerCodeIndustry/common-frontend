import React from 'react'

export interface Nested {
  label?: string
  link?: string
  nested?: Nested[]
}

export interface NestedLinksType {
  label?: string
  link?: string
}

export interface RenderNestedMenuType {
  nested?: Nested[]
}

export interface NestedMenuProps extends React.HTMLAttributes<HTMLElement> {
  arrayNested: Nested[]
  dropdown: string
}
