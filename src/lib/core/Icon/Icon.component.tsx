import styled from 'styled-components'

import { IconSize, getIconSize } from '../../theme'
import { Flexbox } from '../Flexbox'
import { IconProps } from './Icon.types'

export const Icon = styled(Flexbox)<IconProps>`
  ${({ size }) => getIconSize(size ?? IconSize.BASE)}
`
