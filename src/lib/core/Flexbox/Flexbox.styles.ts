import styled from 'styled-components'

import { FlexboxProps } from './Flexbox.types'

export const FlexboxContainer = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
  align-self: ${p => p.alignSelf};
  flex-direction: ${p => p.flexDirection};
  gap: ${p => `${p.gap ?? 0}rem`};
`
