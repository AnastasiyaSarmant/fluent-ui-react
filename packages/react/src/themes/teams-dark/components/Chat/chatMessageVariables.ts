import { ChatMessageVariables } from '../../../teams/components/Chat/chatMessageVariables'

export default (siteVars: any): Partial<ChatMessageVariables> => {
  return {
    backgroundColor: siteVars.colors.grey[650],
    backgroundColorMine: '#3B3C54',
    color: siteVars.colors.white,
    contentFocusOutlineColor: siteVars.brand,
  }
}
