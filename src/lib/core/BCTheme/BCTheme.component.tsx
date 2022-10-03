/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'theme'

import { BCThemeProps } from './BCTheme.types'

export const BCTheme: React.FC<BCThemeProps> = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
