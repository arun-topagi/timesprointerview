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

export const startInterview=()=>{
    return {
        type:ActionTypes.START_INTERVIEW
    }
}
export const changeInterviewStatus=()=>{
    return {
        type:ActionTypes.CHANGE_INTERVIEW_STATUS
    }
}
export const saveQuestions=(payload)=>{
    return {
        type:ActionTypes.SAVE_QUESTION_CHANGES,
        payload:payload
    }
}