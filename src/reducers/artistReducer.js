import * as types from '../actions/actionTypes';
export default function ArtistReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ARTISTS_SUCCESS:
      return action.artists;
    case types.CREATE_ARTIST_SUCCESS:
      return [
        ...state, action.artist
      ];
    case types.UPDATE_ARTIST_SUCCESS:
      return [
        ...state.filter(artist => artist.Id !== action.artist.Id),
        Object.assign({}, action.artist)
      ];
    default:
      return state;
  }

}
