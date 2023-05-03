import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { interviewReducer } from './interviewReducer';
import { questionReducer } from './questionReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    interview : interviewReducer,
    question : questionReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;