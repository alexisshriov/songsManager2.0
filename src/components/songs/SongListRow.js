import React, {PropTypes} from 'react';
import { Redirect } from 'react-router-dom';
import {withRouter} from "react-router-dom";


  const SongListRow = (props) => {

  function handleClickDelete(event){
    props.onDelete(props.song)
  }

  function handleClickEdit(event){
    props.history.push('/song/' + props.song.Id)
  }

  return(
    <tr>
      <td>{props.song.Title}</td>
      <td>{props.song.Year}</td>
      <td>{props.song.Genre}</td>
      <td>{props.song.Length}</td>
      <td>
          <button type="button" className="btn btn-default btn-sm" onClick={handleClickEdit}>
          <span className="glyphicon glyphicon-edit"></span>
          </button>
          {" "}
          <button type="button" className="btn btn-default btn-sm" onClick={handleClickDelete}>
          <span className="glyphicon glyphicon-trash"></span>
          </button>
      </td>

    </tr>
  );
}

export default withRouter(SongListRow);
