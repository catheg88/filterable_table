import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.onTextChange = this.onTextChange.bind(this)
    this.onCheckChange = this.onCheckChange.bind(this)
  }

  onTextChange(e) {
    this.props.handleTextChange(e.target.value)
  }

  onCheckChange(e) {
    this.props.handleCheckChange(e.target.value)
  }


  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="search..."
          value={this.props.searchText}
          onChange={this.onTextChange} />
        <p><span><input
          type="checkbox"
          onChange={this.onCheckChange} /> Only show stocked items</span></p>
      </form>
    )
  }
}

export default SearchBar
