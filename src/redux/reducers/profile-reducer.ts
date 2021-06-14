type ActionType = {
    type: string
}

const initialState = {}

export function profileReducer(state = initialState, action: ActionType): typeof initialState {
    switch (action.type) {
        case '':
            return state
        default:
            return state;
    }
}