import { ActionTypes } from "../constants/action-types"

const questions = require("../../question.json");

const initialState = {
    question:[
        "Tell Me About Yourself ?",
        "Why do you want to work for X company ?",
    ],
    index:0,
}

export const questionReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECTED_QUESTION:
            return {
                ...state,
                index:action.payload
            };
        case ActionTypes.SAVE_QUESTION_CHANGES:
            return {
                ...state,
                question:action.payload
            }
        default:
            return state;
    }
}