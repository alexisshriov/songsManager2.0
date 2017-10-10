import React, {PropTypes} from 'react';
import SongListRow from './SongListRow';

const SongList = (props) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Length</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {props.songs.map(song => <SongListRow key = {song.Id} song = {song} onDelete = {props.onDelete}/>)}
      </tbody>
    </table>
  );
}

export default SongList;
