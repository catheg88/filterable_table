import React from 'react'

class CategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td style={{ fontWeight: 'bold' }}>{this.props.product.category}</td>
      </tr>
    )
  }
}

export default CategoryRow
