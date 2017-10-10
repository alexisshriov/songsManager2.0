import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as songActions from '../../actions/songActions';
import * as artistActions from '../../actions/artistActions';
import SongForm from './SongForm';

export class ManageSongPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: Object.assign({}, this.props.song),
      errors: {}
    };
  }

  componentWillMount(){
    this.props.artistActions.loadArtists();
  }

  updateSongState = (event) => {
    const field = event.target.name;
    let song = this.state.song;
    song[field] = event.target.value;
    return this.setState({ song: song });
  }
  saveSong = (event) => {
    event.preventDefault();
    this.props.songActions.saveSong(this.state.song);
    this.props.history.push('/songs/');
  }
  render() {
    const artitsForDropdown = this.props.artists.map(artist => {
      return {
        value: artist.Id,
        text: artist.Name
      }
    })
    return (

      <SongForm
        allArtists={artitsForDropdown}
        onChange={this.updateSongState}
        onSave={this.saveSong}
        song={this.state.song}
        errors={this.state.errors}
      />
    );
  }
}

ManageSongPage.propTypes = {
  song: PropTypes.object.isRequired
};

ManageSongPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getSongById(songs, id) {
  const song = songs.filter(song => song.Id == id);
  if (song) return song[0];
  return null;
}

function mapStateToProps(state, ownProps) {

  let songId = ownProps.match.params.id;
  let song = { Title: '', Year: '', Genre: '', Length: '', Category: '' };
  let artists = state.artists;

  if (songId && state.songs.length > 0) {
    song = getSongById(state.songs, songId);
  }
  return {
    song: song,
    artists: artists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    songActions: bindActionCreators(songActions, dispatch),
    artistActions: bindActionCreators(artistActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage);
