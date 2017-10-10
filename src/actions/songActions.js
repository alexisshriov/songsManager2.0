import * as types from './actionTypes';
import SongApi from '../api/songs';
import * as apiCongfig from '../api/apiConfig';
import toastr from 'toastr';

export function loadSongsSuccess(songs){
  return {type: types.LOAD_SONGS_SUCCESS, songs}
}

export function updateSongSuccess(song) {
  return { type: types.UPDATE_SONG_SUCCESS, song };
}

export function createSongSuccess(song) {
  return { type: types.CREATE_SONG_SUCCESS, song };
}

export function loadSongs(){
  return dispatch => {
     return fetch(apiCongfig.URL_API + '/api/songs/')
       .then( response => response.json())
       .then( json => dispatch(loadSongsSuccess(json)))
   }
}

export function saveSong(song, dispatch) {
    let songValidation = validateSong(song);
    if(songValidation.isValid){
      return  song.Id ? updateSong(song) : createSong(song);
    } else{
       toastr.error(songValidation.message);
       return null;
    }

}

export function createSong(song, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/songs/',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
          }).then( response => response.json())
            .then( (json) => {
              dispatch(createSongSuccess(json))
              toastr.success('saved successfully.');
            })
       }
}

export function updateSong(song, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/songs/' + song.Id,
          {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
          }).then( () => {
            dispatch(updateSongSuccess(song))
            toastr.success('saved successfully.');
          })
       }
}
export function deleteSong(song, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/songs/' + song.Id,
          {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
          }).then( response => response.json())
            .then(() => dispatch(loadSongs()))
       }
}

export function querySongs(term, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/songs/query?s=' + term,
          {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          }).then( response => response.json())
            .then((json) => dispatch(loadSongsSuccess(json)))
       }
}

function validateSong(song){
    if(!song.Title.trim() || !song.Genre.trim() || !song.Year.toString().trim() || !song.Length.trim() || !song.ArtistId){
      return {isValid: false, message: "All fields are required"}
    }
    if(isNaN(song.Year)){
        return {isValid: false, message: "Year has to be a number"}
    }
    return {isValid: true, message: ""};
}
