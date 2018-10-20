import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Spotify Artist Data </h1>
        <Search />
          
      </div>
    );
  }
}

export default App;