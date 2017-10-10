import * as types from './actionTypes';
import ArtistApi from '../api/artists';
import * as apiCongfig from '../api/apiConfig';
import toastr from 'toastr';

export function loadArtistsSuccess(artists){
  return {type: types.LOAD_ARTISTS_SUCCESS, artists}
}

export function updateArtistSuccess(artist) {
  return { type: types.UPDATE_ARTIST_SUCCESS, artist };
}

export function createArtistSuccess(artist) {
  return { type: types.CREATE_ARTIST_SUCCESS, artist };
}

export function loadArtists(){
  return dispatch => {
     return fetch(apiCongfig.URL_API + '/api/artists/')
       .then( response => response.json())
       .then( json =>
         dispatch(loadArtistsSuccess(json))
       )
   }
}

export function saveArtist(artist, dispatch) {
    let artistValidation = validateArtist(artist);
    if(artistValidation.isValid){
      return  artist.Id ? updateArtist(artist) :
        createArtist(artist);
    } else{
       toastr.error(artistValidation.message);
       return null;
    }
}

export function createArtist(artist, dispatch) {

    return dispatch => {
           return fetch(apiCongfig.URL_API + '/api/artists/',
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(artist)
            }).then( response => response.json())
              .then( (json) => {
                dispatch(createArtistSuccess(json))
                toastr.success('saved successfully.');
              } )
         }
}

export function updateArtist(artist, dispatch) {
    return dispatch => {
           return fetch(apiCongfig.URL_API + '/api/artists/' + artist.Id,
            {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(artist)
            }).then( () => {
                dispatch(updateArtistSuccess(artist))
                toastr.success('saved successfully.');
            })
         }
}

export function deleteArtist(artist, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/artists/' + artist.Id,
          {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
          }).then( response => response.json())
            .then((json) => dispatch(loadArtists()))
       }
}

export function queryArtists(term, dispatch) {
  return dispatch => {
         return fetch(apiCongfig.URL_API + '/api/artists/query?s=' + term,
          {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          }).then(response => response.json())
            .then((json) => dispatch(loadArtistsSuccess(json)))
       }
}
function validateArtist(artist){
    if(!artist.Name.trim() || !artist.Country.trim() || !artist.Year.toString().trim()){
        return {isValid: false, message: "All fields are required"}
    }
    if(isNaN(artist.Year)){
        return {isValid: false, message: "Year has to be a number"}
    }
    return {isValid: true, message: ""};
}
