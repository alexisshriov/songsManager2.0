import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import reduxImmutbleStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'
import {loadSongs} from './actions/songActions';
import {loadArtists} from './actions/artistActions';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

let store = createStore(
    rootReducer,
    applyMiddleware(thunk, reduxImmutbleStateInvariant())
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
