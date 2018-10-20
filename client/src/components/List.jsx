import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => (
  <div>
    <h3>Music Artist List</h3>
    <h3>You have {props.artists.length} artists in your database</h3>
    <ol>
      {props.artists.map((artist, i) => (
        <ListEntry artist={artist} key={i} />
      ))}
    </ol>
  </div>
)

export default List;