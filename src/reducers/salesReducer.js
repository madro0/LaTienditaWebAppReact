import { types } from '../types/types';
const initialState = {
    loadig: false
}
export const salesReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.createSale:
            return{
                ...state,
            }
        default:
            return state;
    }
}