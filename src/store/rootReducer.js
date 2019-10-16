const initState = 0
export const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD":
            return state += 1
        default:
            return state
    }
}