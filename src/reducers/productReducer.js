import { types } from "../types/types";
const initialState = {
    products: [],
    product: {},
    loading: false,
}

export const productReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.startLoadingProductsList:
            return{
                ...state,
                loading:true
            }
        case types.loadingProductsList:
            return{
                ...state,
                products:[...action.payload]
            }
        case types.finishLoadingProductsList:
            return{
                ...state,
                loading:false
            }

        case types.startLoadingProduct:
            return{
                ...state,
                loading:true,
            }
        case types.loadingProduct:
            return{
                ...state,
                product:action.payload,
            }
        case types.finishLoadingProduct:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }

}