const artists = [
  {
    id: 1,
    name: 'Michael Jackson',
    country: 'USA',
    year: '1980'

  },
  {
    id: 2,
    name: 'Cold play',
    country: 'England',
    year: '1996'
  },
  {
    id: 3,
    name: 'Muse',
    country: 'England',
    year: '2000'
  }
];

class ArtistApi {
  static getAllArtists() {
  return artists;
  }
}
export default ArtistApi;
