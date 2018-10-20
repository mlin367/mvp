import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleButtonClick(e) {
    this.props.search(this.state.input);
  }


  render() {
    return (
      <div>
       <input onChange={this.handleInputChange}></input>
       <button onClick={this.handleButtonClick}>Search for Artist</button>
      </div>
    )
  }
}

export default Search;