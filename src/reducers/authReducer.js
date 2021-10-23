import { types } from '../types/types';
const initialState = {
    checking: true,
    // id: null,
    // name: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checking: false
            }

        case types.logout:
            return { }

        default:
            return state;
    }
}