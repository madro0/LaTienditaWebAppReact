import { types } from '../types/types'
const initialState = {
    providers: [],
    loading: false,
}

export const providerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.startLoadingProvidersList:
            return{
                ...state,
                loading:true
            }
        case types.loadProvidersList:
            return{
                ...state,
                providers:[...action.payload]
            }
        case types.finishLoadingProvidersList:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
}
