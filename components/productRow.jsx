import React from 'react'

class ProductRow extends React.Component {
  render() {
    if (this.props.product.stocked) {
      return (
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
          <td>{this.props.product.stocked.toString()}</td>
        </tr>
      )
    }
    return (
      <tr>
        <td><span style={{ color: 'red' }}>{this.props.product.name}</span></td>
        <td><span style={{ color: 'red' }}>{this.props.product.price}</span></td>
        <td><span style={{ color: 'red' }}>{this.props.product.stocked.toString()}</span></td>
      </tr>
    )
  }



}

export default ProductRow
