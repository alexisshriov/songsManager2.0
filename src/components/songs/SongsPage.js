import React from 'react';
import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import {bindActionCreators} from 'redux';
import SongList from './SongList';
import TextInput from '../common/TextInput';

class SongsPage extends React.Component {

  constructor(props, context) {
     super(props, context);
     this.state = {filter:''}
     this.redirectToAddSongPage = this.redirectToAddSongPage.bind(this);
     this.deleteSong = this.deleteSong.bind(this);
     this.handleFilterChange = this.handleFilterChange.bind(this);
   }

  redirectToAddSongPage() {
    this.props.history.push('/song/');
  }

  deleteSong(song) {
     this.props.actions.deleteSong(song);
  }

  handleFilterChange(event) {
      this.setState({filter: event.target.value});
      this.props.actions.querySongs(event.target.value);
  }

  componentDidMount() {
    this.props.actions.loadSongs();
  }

  render(){
    const {songs} = this.props;
    return(
      <div>
        <h1>Songs</h1>
        <TextInput
          name="filter"
          label=""
          value={this.state.filter}
          placeholder="Filter"
          onChange={this.handleFilterChange}/>
        <SongList songs = {songs} onDelete = {this.deleteSong}/>
        <input
         type="submit"
         value="Add Song"
         className="btn btn-primary"
         onClick={this.redirectToAddSongPage}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    songs: state.songs
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(songActions, dispatch)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(SongsPage);
