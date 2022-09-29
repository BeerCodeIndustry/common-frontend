import { ReactNode } from 'react'

export interface FlexboxProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  flexDirection?: FlexDirection
  gap?: number
}

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit'

export type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

export type AlignSelf =
  | 'auto'
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'initial'
  | 'inherit'
