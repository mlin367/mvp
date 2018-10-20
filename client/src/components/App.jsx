import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
    this.search = this.search.bind(this);
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
    axios.get('/artists')
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

  render() {
    return (
      <div>
        <h1> Spotify Artist Data </h1>
        <Search search={this.search}/>
        <List artists={this.state.artists} />
      </div>
    );
  }
}

export default App;