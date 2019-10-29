import { pxToRem } from '../../../../lib'
import { SiteVariablesInput } from '../../../types'

export interface StatusVariables {
  successBackgroundColor: string
  successTextColor: string
  infoBackgroundColor: string
  infoTextColor: string
  warningBackgroundColor: string
  warningTextColor: string
  errorBackgroundColor: string
  errorTextColor: string
  defaultBackgroundColor: string
  defaultTextColor: string

  borderColor: string
  borderWidth: string

  smallest: string
  smaller: string
  small: string
  medium: string
  large: string
  larger: string
  largest: string
}

export default (siteVariables: SiteVariablesInput): StatusVariables => ({
  successBackgroundColor: siteVariables.colors.green[200],
  successTextColor: siteVariables.colors.white,
  infoBackgroundColor: siteVariables.colors.brand[500],
  infoTextColor: siteVariables.colors.white,
  warningBackgroundColor: siteVariables.colors.yellow[400],
  warningTextColor: siteVariables.colors.white,
  errorBackgroundColor: siteVariables.colors.red[400],
  errorTextColor: siteVariables.colors.white,
  defaultBackgroundColor: siteVariables.colors.grey[350],
  defaultTextColor: siteVariables.colors.white,

  borderColor: 'transparent',
  borderWidth: '0',

  smallest: pxToRem(8),
  smaller: pxToRem(8),
  small: pxToRem(8),
  medium: pxToRem(10),
  large: pxToRem(12),
  larger: pxToRem(14),
  largest: pxToRem(16),
})
