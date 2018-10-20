import React from 'react';

const ListEntry = (props) => (
  <div>
    <li>{props.artist.name}</li>
    <div>
      <img src={props.artist.image}></img>
      <p>Followers: {props.artist.followers}</p>
      <p>Genres: {props.artist.genres}</p>   
    </div>
  </div>
);

export default ListEntry;