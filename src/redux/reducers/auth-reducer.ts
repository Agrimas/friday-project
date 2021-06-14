type ActionType = {
    type: string
}

const initialState = {}

export function authReducer(state = initialState, action: ActionType): typeof initialState {
    switch (action.type) {
        case '':
            return state
        default:
            return state;
    }
}