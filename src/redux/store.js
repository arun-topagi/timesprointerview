import {createStore} from 'redux';
import persistedReducer from './reducers/index';
import { persistStore } from 'redux-persist';

export const store = createStore(persistedReducer, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);