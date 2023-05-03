import { ActionTypes } from "../constants/action-types"

const questions = require("../../question.json");

const initialState = {
    question:questions.General[0],
    index:0,
}

export const questionReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECTED_QUESTION:
            return {
                ...state,
                question:questions.General[action.payload],
                index:action.payload
            };
        default:
            return state;
    }
}