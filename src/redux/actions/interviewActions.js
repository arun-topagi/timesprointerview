import { ActionTypes } from "../constants/action-types"

export const setQuestions = (questions) => {
    return {
        type:ActionTypes.SET_QUESTIONS,
        payload: questions
    }
}

export const setSelectedQuestion = (index) => {
    return {
        type:ActionTypes.SELECTED_QUESTION,
        payload: index
    }
}