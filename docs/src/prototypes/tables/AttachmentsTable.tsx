import * as React from 'react'

import {
  Table,
  Icon,
  tableRowFocusableBehavior,
  tableHeaderRowNestedNavigationBehavior,
  tableVerticalNavigationBehavior,
  gridCellBehavior,
} from '@stardust-ui/react'

// TODO: FIX shift + TAB for headings
class AttachmentsTable extends React.Component {
  state = {
    rowIndexClicked: -1,
    focusedCol: 0,
    focusedRow: 0,
  }

  renderHeader = () => ({
    items: [
      { content: 'Type', 'data-is-focusable': true },
      { content: 'Name', 'data-is-focusable': true },
      { content: 'Modified', 'data-is-focusable': true },
    ],
    accessibility: tableHeaderRowNestedNavigationBehavior,
  })

  renderRows = () => [
    {
      items: [
        {
          content: <Icon aria-label="word" name="word-color" />,
          accessibility: gridCellBehavior,
        },
        { content: <span>Accessibility stardust patterns</span>, accessibility: gridCellBehavior },
        { content: <span>7/17/18</span>, accessibility: gridCellBehavior },
      ],
      accessibility: tableRowFocusableBehavior,
      onClick: () => this.handleRowClick(1),
    },
    {
      items: [
        {
          content: <Icon aria-label="excel" name="excel-color" />,
          accessibility: gridCellBehavior,
        },
        { content: <span>Budget</span>, accessibility: gridCellBehavior },
        { content: <span>9/25/18</span>, accessibility: gridCellBehavior },
      ],
      accessibility: tableRowFocusableBehavior,
      onClick: () => this.handleRowClick(2),
    },
    {
      items: [
        {
          content: <Icon aria-label="powerpoint" name="powerpoint-color" />,
          accessibility: gridCellBehavior,
        },
        { content: <span>Accessibility for everyone</span>, accessibility: gridCellBehavior },
        { content: <span>1/17/19</span>, accessibility: gridCellBehavior },
      ],
      accessibility: tableRowFocusableBehavior,
      onClick: () => this.handleRowClick(3),
    },
  ]

  handleRowClick = index => {
    this.setState({ rowIndexClicked: index })
  }

  render() {
    return (
      <>
        <span>
          <b>Row clicked:</b> {this.state.rowIndexClicked}
        </span>
        <Table
          aria-label="Attachments"
          header={this.renderHeader()}
          rows={this.renderRows()}
          accessibility={tableVerticalNavigationBehavior}
        />
      </>
    )
  }
}

export default AttachmentsTable
