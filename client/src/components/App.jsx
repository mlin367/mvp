import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      sortBy: 'followers'
    };
    this.search = this.search.bind(this);
    this.delete = this.delete.bind(this);
    this.handleFollowers = this.handleFollowers.bind(this);
    this.handleAlphabetically = this.handleAlphabetically.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  search(artist) {
    axios.post('/artists', {
      name: artist
    })
    .then(res => {
      console.log(res);
      this.fetch();
    })
    .catch(err => {
      console.error(err);
    })
  }

  fetch() {
    axios.get('/artists', {
      params: {sortBy: this.state.sortBy}
    })
    .then(res => {
      console.log(res)
      this.setState({
        artists: res.data
      })
    })
    .catch(err => {
      console.error('FETCH', err);
    })
  }

  delete(artist) {
    axios.delete('/artists', {
      params: {name: artist}
    })
    .then(res => {
      console.log(res);
      this.fetch();
    })
    .catch(err => {
      console.error(err);
    })
  }

  handleFollowers() {
    this.setState({
      sortBy: "followers"
    })
    this.fetch();
  }

  handleAlphabetically() {
    this.setState({
      sortBy: "name"
    })
    this.fetch();
  }

  render() {
    return (
      <div>
        <div className="top">
          <h1> Spotify Artist Data </h1>
          <Search search={this.search} delete={this.delete}/>
          <button onClick={this.handleFollowers}>Sort by Followers</button>
          <button onClick={this.handleAlphabetically}>Sort Alphabetically</button>
        </div>
        <List artists={this.state.artists} />
      </div>
    );
  }
}

export default App;