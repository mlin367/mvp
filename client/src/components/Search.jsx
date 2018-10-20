import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSearchClick(e) {
    this.props.search(this.state.input);
  }

  handleDeleteClick(e) {
    this.props.delete(this.state.input);
  }

  render() {
    return (
      <div>
       <input onChange={this.handleInputChange}></input>
       <br/>
       <button onClick={this.handleSearchClick}>Search for Artist</button>
       <button onClick={this.handleDeleteClick}>Delete Artist</button>
      </div>
    )
  }
}

export default Search;