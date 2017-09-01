import React from 'react'
import ProductRow from './productRow'
import CategoryRow from './categoryRow'

class Table extends React.Component {
  render() {
    var rows = []
    var lastCategory = null
    this.props.inventory.forEach( product => {

      // skip row on text filter
      var text = this.props.searchText
      if (product.name.slice(0, text.length) !== text) {
        return
      }

      // skip row on stock filter
      if ( this.props.onlyStocked ) {
        if (product.stocked === false) {
          return
        }
      }

      // set category row
      if( product.category !== lastCategory ) {
        rows.push(<CategoryRow product={product} />)
      }

      // push product row
      rows.push(<ProductRow product={product} />)
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stocked</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default Table
