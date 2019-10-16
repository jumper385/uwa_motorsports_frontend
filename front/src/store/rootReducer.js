import { combineReducers } from 'react-redux'

const initState = {
    members: ["none"]
}

const NoneReducer = (state, action) => {
    switch(action.type){
        case "NONE":
            return state
    }
}

const MemberReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_MEMBER":
            const member = action.content
            return [...state.members, member]

        default: 
            return state
            
    }
}

export const rootReducer = combineReducers({NoneRed: NoneReducer, MemberRed: MemberReducer})