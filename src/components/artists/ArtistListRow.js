import React, {PropTypes} from 'react';
import { Redirect, withRouter } from 'react-router-dom';

  const ArtistListRow = (props) => {

  function handleClickDelete(event){
    props.onDelete(props.artist)
  }

  function handleClickEdit(event){
      props.history.push('/artist/' + props.artist.Id)
  }

  return(
    <tr>
      <td>{props.artist.Name}</td>
      <td>{props.artist.Country}</td>
      <td>{props.artist.Year}</td>
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

export default withRouter(ArtistListRow);
