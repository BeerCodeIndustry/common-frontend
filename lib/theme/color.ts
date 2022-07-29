export enum Color {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  WHITE_300 = 'WHITE_300',
  GREEN_100 = 'GREEN_100',
  RED_500 = 'RED_500',
  RED_400 = 'RED_400',
  RED_100 = 'RED_100',
  YELLOW_500 = 'YELLOW_500',
  YELLOW_100 = 'YELLOW_100',
  DARK_BLUE_500 = 'DARK_BLUE_500',
  BLUE_200 = 'BLUE_200',
  DARK_LIGHT_500 = 'DARK_LIGHT_500',
  DARK_LIGHT_400 = 'DARK_LIGHT_400',
  DARK_LIGHT_300 = 'DARK_LIGHT_300',
  DARK_LIGHT_200 = 'DARK_LIGHT_200',
  GRAY_500 = 'GRAY_500',
  GRAY_400 = 'GRAY_400',
  GRAY_200 = 'GRAY_200',
  GRAY_100 = 'GRAY_100',
  PURPLE_200 = 'PURPLE_200',
}

export enum Opacity {
  _90 = '_90',
  _80 = '_80',
  _70 = '_70',
  _60 = '_60',
  _50 = '_50',
  _40 = '_40',
  _30 = '_30',
  _20 = '_20',
  _10 = '_10',
}

export const getColor = (color: Color): string => {
  return colors[color]
}

export const getColorWithOpacity = (color: Color, opacity: Opacity): string => {
  return getColor(color) + opacities[opacity]
}

export const opacities: { [key in Opacity]: string } = {
  [Opacity._90]: 'E6',
  [Opacity._80]: 'CC',
  [Opacity._70]: 'B3',
  [Opacity._60]: '99',
  [Opacity._50]: '80',
  [Opacity._40]: '66',
  [Opacity._30]: '4D',
  [Opacity._20]: '33',
  [Opacity._10]: '1A',
}

export const colors: { [key in Color]: string } = {
  [Color.BLACK]: '#000000',
  [Color.WHITE]: '#FFFFFF',
  [Color.WHITE_300]: '#F2F2F2',
  [Color.GREEN_100]: '#49bfa5',
  [Color.RED_500]: '#840101',
  [Color.RED_400]: '#A70202',
  [Color.RED_100]: '#d7273d',
  [Color.GRAY_500]: '#272727',
  [Color.GRAY_400]: '#666666',
  [Color.GRAY_200]: '#949999',
  [Color.GRAY_100]: '#babbbd',
  [Color.YELLOW_500]: '#CDB200',
  [Color.YELLOW_100]: '#F9DC38',
  [Color.DARK_BLUE_500]: '#191d24',
  [Color.BLUE_200]: '#a3dafb',
  [Color.DARK_LIGHT_500]: '#0F0F0F',
  [Color.DARK_LIGHT_400]: '#141414',
  [Color.DARK_LIGHT_300]: '#191C22',
  [Color.DARK_LIGHT_200]: '#303238',
  [Color.PURPLE_200]: '#7255A5',
}
