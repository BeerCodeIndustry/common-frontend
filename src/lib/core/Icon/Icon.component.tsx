import styled from 'styled-components'

import { IconSize, getColor, getIconSize } from '../../theme'
import { Flexbox } from '../Flexbox'
import { IconProps } from './Icon.types'

export const Icon = styled(Flexbox)<IconProps>`
  ${({ size }) => getIconSize(size ?? IconSize.BASE)}
  ${({ color }) =>
    color &&
    `
    svg {
      fill: ${getColor(color)};

      line {
        stroke: ${getColor(color)};
      }
      path {
        stroke: ${getColor(color)};
        fill: ${getColor(color)};
      }
    }

  `}
`
