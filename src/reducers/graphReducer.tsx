type stateType = {
    isLoading?: boolean;
    graphs?: Array<{}>
    err?: null | string
}

type actionType = {
    type: string
    data?: Array<{}>
    isLoading?: boolean
    errMsg?: null | string
}

const graphReducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case 'setLoading': {
            return {...state, isLoading: action.isLoading}
        }
        case 'setGraphData': {
            return {...state, graphs: action.data, err: null}
        }
        case 'setError': {
            return {...state, err: action.errMsg}
        }
        default:
            return state;
    }
}

export default graphReducer;