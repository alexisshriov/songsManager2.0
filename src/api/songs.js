const songs = [
  {
    id: 1,
    title: 'Smooth criminal',
    year: 1987,
    genre: 'Electro funk',
    length: '4:17',
    artistId: 1
  },
  {
    id: 2,
    title: 'They dont care about us',
    year: 1995,
    genre: 'Pop',
    length: '4:44',
    artistId: 1
  },
  {
    id: 3,
    title: 'Uprising',
    year: 2009,
    genre: 'Alternative rock',
    length: '5:03',
    artistId: 3
  },
  {
    id: 4,
    title: 'In my place',
    year: 2002,
    genre: 'Alternative rock',
    length: '3:38',
    artisId: 2
  }
];

class SongApi {
  static getAllSongs() {
  return songs;
  }
}
export default SongApi;
