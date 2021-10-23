import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer'
import { providerReducer } from '../reducers/providerReducer';
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    provider: providerReducer,
    product: productReducer
})