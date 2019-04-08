import { pxToRem } from '../../lib'
import { colors, naturalColors } from './colors'

//
// VARIABLES
//
export const htmlFontSize = '10px' // what 1rem represents

//
// COLORS
//
export {
  colors,
  contextualColors,
  emphasisColors,
  naturalColors,
  primitiveColors,
  colorScheme,
} from './colors'

export const magenta = '#B24782' // no mapping color
export const orchid = '#943670' // no mapping color

export const red = colors.red[400] // no mapping color $app-red
export const red08 = '#F3D6DB' // no mapping color $app-red-08
export const red10 = colors.red[50] // no mapping color $app-red-10

//
// SHADOW LEVELS
//
export const shadowLevel1 = '0 .2rem .4rem -.075rem rgba(0, 0, 0, .1)'
export const shadowLevel2 = '0 .4rem 0.7rem -0.1rem rgba(0, 0, 0, .1)'
export const shadowLevel3 = '0 .8rem 1rem -0.2rem rgba(0, 0, 0, .1)'
export const shadowLevel4 = '0 .6rem 1.8rem -0.4rem rgba(0, 0, 0, .1)'

export const shadowLevel1Darker = '0 .2rem .4rem -.075rem rgba(0, 0, 0, 0.5)'

//
// FONT SIZES
//
export const fontSizes = {
  smaller: pxToRem(10),
  small: pxToRem(12),
  medium: pxToRem(14),
  large: pxToRem(18),
  larger: pxToRem(24),
}

//
// STATUS COLORS
//
export const successStatusBackgroundColor = naturalColors.lightGreen[900]
export const successStatusTextColor = colors.white
export const infoStatusBackgroundColor = 'blue'
export const infoStatusTextColor = colors.white
export const warningStatusBackgroundColor = colors.yellow[900]
export const warningStatusTextColor = colors.white
export const errorStatusBackgroundColor = colors.red[400]
export const errorStatusTextColor = colors.white
export const unknownStatusBackgroundColor = colors.grey[350]
export const unknownStatusTextColor = colors.white

//
// FONT WEIGHTS
//
export const fontWeightLight = 200
export const fontWeightSemilight = 300
export const fontWeightRegular = 400
export const fontWeightSemibold = 600
export const fontWeightBold = 700

//
// LINE HEIGHTS
//
export const lineHeightSmaller = 1.2
export const lineHeightSmall = 1.3333
export const lineHeightMedium = 1.4286
export const lineHeightLarge = 1.3333
export const lineHeightLarger = 1.3333

//
// SEMANTIC ASSIGNMENTS
//
export const bodyPadding = 0
export const bodyMargin = 0
export const bodyFontFamily =
  '"Segoe UI", "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", Helvetica, Arial, sans-serif'
export const bodyFontSize = '1.4rem'
export const bodyBackground = colors.white
export const bodyColor = colors.grey[750]
export const bodyLineHeight = lineHeightMedium
