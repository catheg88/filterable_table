import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './searchBar'
import Table from './table'
import Inventory from '../data/inventory.js'

class FilterableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      onlyStocked: false
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleTextChange(searchText) {
    this.setState({ searchText: searchText })
  }

  handleCheckChange(onlyStocked) {
    this.setState({ onlyStocked: !this.state.onlyStocked })
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onlyStocked={this.state.onlyStocked}
          handleTextChange={this.handleTextChange}
          handleCheckChange={this.handleCheckChange}
        />
        <Table
          inventory={this.props.inventory}
          searchText={this.state.searchText}
          onlyStocked={this.state.onlyStocked}
        />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root")
  ReactDOM.render(<FilterableTable inventory={Inventory} />, root)
})
