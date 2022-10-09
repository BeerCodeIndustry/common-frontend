import { IconProps } from '../Icon'
import { TextElementProps } from '../TextElement'

export type IconFilenameProps = TextElementProps &
  IconProps & {
    fullFilename: string
  }
