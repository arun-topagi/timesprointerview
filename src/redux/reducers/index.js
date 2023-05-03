import {combineReducers} from 'redux';
import { interviewReducer } from './interviewReducer';
import { questionReducer } from './questionReducer';

const reducers = combineReducers({
    interview : interviewReducer,
    question : questionReducer
})

export default reducers;