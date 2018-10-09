import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createShorthandFactory, customPropTypes, UIComponent } from '../../lib'
import ItemLayout from '../ItemLayout'
import { listItemBehavior } from '../../lib/accessibility'
import { Accessibility } from '../../lib/accessibility/interfaces'
import { ComponentVariablesInput, ComponentPartStyle } from '../../../types/theme'
import { Extendable } from '../../../types/utils'

export interface IListItemProps {
  accessibility?: Accessibility
  active?: boolean
  as?: any
  className?: string
  contentMedia?: any
  content?: any
  debug?: boolean
  endMedia?: any
  header?: any
  headerMedia?: any
  important?: boolean
  media?: any
  selection?: boolean
  styles?: ComponentPartStyle
  truncateContent?: boolean
  truncateHeader?: boolean
  variables?: ComponentVariablesInput
}

class ListItem extends UIComponent<Extendable<IListItemProps>, any> {
  static create: Function

  static displayName = 'ListItem'

  static className = 'ui-list__item'

  static propTypes = {
    /** Accessibility behavior if overridden by the user. */
    accessibility: PropTypes.func,

    /** A list item can indicate that it is active. */
    active: PropTypes.bool,

    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional CSS class name(s) to apply.  */
    className: PropTypes.string,

    /** Media for the content */
    contentMedia: PropTypes.any,

    /** Shorthand for primary content. */
    content: PropTypes.any,

    /** Toggle debug mode */
    debug: PropTypes.bool,

    /** A list item can have an end media which appears at the rightmost end and only when the list item is hovered. */
    endMedia: PropTypes.any,

    /** A list item can have a header of the content. */
    header: PropTypes.any,

    /** A list item's can have a header media at the rightmost end. */
    headerMedia: PropTypes.any,

    /** A list item can appear more important and draw the user's attention. */
    important: PropTypes.bool,

    /** A list item can have media at the leftmost position. */
    media: PropTypes.any,

    /** A list item can indicate that it can be active. */
    selection: PropTypes.bool,

    /** Additional CSS styles to apply to the component instance.  */
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Truncates content */
    truncateContent: PropTypes.bool,

    /** Truncates header */
    truncateHeader: PropTypes.bool,

    /** Override for theme site variables to allow modifications of component styling via themes. */
    variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  static defaultProps = {
    as: 'li',
    accessibility: listItemBehavior as Accessibility,
  }

  state: any = {}

  handleMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  renderComponent({ ElementType, classes, accessibility, rest, styles }) {
    const {
      active,
      as,
      debug,
      endMedia,
      media,
      content,
      contentMedia,
      header,
      headerMedia,
      selection,
      truncateContent,
      truncateHeader,
    } = this.props

    const { isHovering } = this.state
    const endArea = isHovering && endMedia

    const hoveringSelectionCSS = selection && isHovering ? { color: 'inherit' } : {}
    const activeCSS = active ? { color: 'inherit' } : {}

    const headerCSS = {
      ...styles.header,
      ...hoveringSelectionCSS,
      ...activeCSS,
    }
    const headerMediaCSS = {
      ...styles.headerMedia,
      ...hoveringSelectionCSS,
      ...activeCSS,
    }
    const contentCSS = {
      ...styles.content,
      ...hoveringSelectionCSS,
      ...activeCSS,
    }

    return (
      <ItemLayout
        as={as}
        className={classes.root}
        rootCSS={styles.root}
        content={content}
        contentMedia={!isHovering && contentMedia}
        debug={debug}
        endMedia={endArea}
        header={header}
        headerMedia={headerMedia}
        media={media}
        mediaCSS={styles.media}
        selection={selection}
        truncateContent={truncateContent}
        truncateHeader={truncateHeader}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        headerCSS={headerCSS}
        headerMediaCSS={headerMediaCSS}
        contentCSS={contentCSS}
        {...accessibility.attributes.root}
        {...rest}
      />
    )
  }
}

ListItem.create = createShorthandFactory(ListItem, main => ({ main }))

export default ListItem
