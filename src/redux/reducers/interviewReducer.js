import { ActionTypes } from "../constants/action-types"

const questions = require("../../question.json");

const initialState = {
    isStart : false
}

export const interviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_QUSTIONS:
            return state;
        case ActionTypes.START_INTERVIEW:
            return {
                ...state,
                isStart:true
        }
        case ActionTypes.CHANGE_INTERVIEW_STATUS:
            return {
                ...state,
                isStart:true
        }
        default:
            return state;
    }
}