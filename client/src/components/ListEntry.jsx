import React from 'react';

const ListEntry = (props) => (
  <div>
    <li className="list">{props.artist.name}</li>
    <img src={props.artist.image}></img>
    <div className="info">
      <p>Followers: {props.artist.followers}</p>
      <p>Genres: {props.artist.genres}</p>
      <p>Top Tracks: {props.artist.topTracks}</p>   
    </div>
  </div>
);

export default ListEntry;