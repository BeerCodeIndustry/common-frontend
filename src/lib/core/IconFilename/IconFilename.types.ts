import { IconProps } from '../Icon'
import { TextElementProps } from '../TextElement'

export type IconFilenameProps = Omit<
  TextElementProps &
    IconProps & {
      fullFilename: string
    },
  'color'
>
