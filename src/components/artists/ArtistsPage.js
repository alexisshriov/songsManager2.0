import React from 'react';
import { connect } from 'react-redux';
import * as artistActions from '../../actions/artistActions';
import { bindActionCreators } from 'redux';
import ArtistList from './ArtistList';
import TextInput from '../common/TextInput';

class ArtistsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { filter: '' }
    this.redirectToAddArtistPage = this.redirectToAddArtistPage.bind(this);
    this.deleteArtist = this.deleteArtist.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadArtists();
  }

  redirectToAddArtistPage() {
    this.props.history.push('/artist/');
  }

  deleteArtist(artist) {
    this.props.actions.deleteArtist(artist);
  }

  handleFilterChange(event) {
    this.setState({filter: event.target.value});
    this.props.actions.queryArtists(event.target.value);
  }


  render() {
    const { artists } = this.props;
    return (
      <div>
        <h1>Artists</h1>
        <TextInput
          name="filter"
          label=""
          value={this.state.filter}
          placeholder="Filter"
          onChange={this.handleFilterChange} />
        <ArtistList artists={artists} onDelete={this.deleteArtist} />
        <input
          type="submit"
          value="Add Artist"
          className="btn btn-primary"
          onClick={this.redirectToAddArtistPage} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    artists: state.artists
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(artistActions, dispatch)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);
