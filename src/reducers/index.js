import {combineReducers} from 'redux';
import songs from './songReducer';
import artists from './artistReducer';

const rootReducer = combineReducers({
  songs,
  artists
});
export default rootReducer;
