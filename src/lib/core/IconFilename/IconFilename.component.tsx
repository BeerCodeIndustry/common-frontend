import { JS, JsonSVG, ReactSVG, TS, TXT } from '@beercode/common-icons'
import { getFileExt } from '@beercode/common-utils'
import React, { useMemo } from 'react'

import { IconSize } from '../../theme'
import { Flexbox } from '../Flexbox'
import { Icon } from '../Icon'
import { TextElement } from '../TextElement'
import { IconFilenameProps } from './IconFilename.types'

const extensions = [
  {
    ext: 'json',
    Component: <JsonSVG />,
  },
  {
    ext: 'js',
    Component: <JS />,
  },
  {
    ext: 'jsx',
    Component: <ReactSVG />,
  },
  {
    ext: 'ts',
    Component: <TS />,
  },
  {
    ext: 'tsx',
    Component: <TS />,
  },
  {
    ext: 'txt',
    Component: <TXT />,
  },
]

export const IconFilename: React.FC<IconFilenameProps> = ({
  fullFilename,
  size = IconSize.SM,
  color,
  ...textElementProps
}) => {
  const SVG = useMemo(
    () => extensions.find(e => e.ext === getFileExt(fullFilename))?.Component,
    [fullFilename],
  )

  return (
    <Flexbox alignItems='center' gap={0.2}>
      <Icon size={size} color={color}>
        {SVG}
      </Icon>
      <TextElement {...textElementProps}>{fullFilename}</TextElement>
    </Flexbox>
  )
}
