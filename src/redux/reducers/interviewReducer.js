import { ActionTypes } from "../constants/action-types"

const questions = require("../../question.json");

const initialState = {
    questions:questions
}

export const interviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_QUSTIONS:
            return state;
        default:
            return state;
    }
}