import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import Swal from 'sweetalert2';
import { parseMessagesErrors } from '../helpers/errorsfetch';
import { types } from '../types/types';

export const createProduct= (name, price, stock, provider)=>{
    return async()=>{
        
        const resp = await fetchWithToken('product',{name, price, stock, provider}, 'POST');
        const body = await resp.json();

        if(body.ok){
            Swal.fire('Success','Product stored correctly', 'success');
        }else{
            
            Swal.fire('Error',parseMessagesErrors(body.message), 'error');
            // Swal.fire('Error',JSON.stringify(body.message), 'error');
        }
    }
}
export const getAllProducts = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(startLoadingProductsList())
            const resp = await fetchWithToken('product');
            const body = await resp.json();
            if (body.ok){
                const {products} = body
                dispatch(loadingProductsList(products));
                dispatch(finishLoadingProductsList());
            }
        } catch (err) {
            dispatch(finishLoadingProductsList());
        }
    }
}
export const searchProducts = (search)=>{
    return async (dispatch) =>{
        try {
            dispatch(startLoadingProductsList());
            const resp = await fetchWithToken(`product/search/${search}`);
            const body = await resp.json();
            if(body.ok){
                const {products} = body;
                dispatch(loadingProductsList(products));
                dispatch(finishLoadingProductsList());
            }
        } catch (err) {
            dispatch(finishLoadingProductsList());
        }
    }
}
export const getProduct = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(startLoadingProduct());
            const resp = await fetchWithToken(`product/${id}`);
            const body = await resp.json();
            if(body.ok){
                const {product} = body;
                dispatch(loadingProduct(product));
                dispatch(finishLoadingProduct());
            }
        } catch (err) {
            dispatch(finishLoadingProduct());
        }
    }
}
export const updateProduct = (idProduct, name, price, stock, provider)=>{
    return async ()=>{
        try {
            const resp = await fetchWithToken(`product/${idProduct}`,{name, price, stock, provider}, 'PUT');
            const body = await resp.json();

            if(body.ok){
                Swal.fire('Success',`The product ${body.product.name} has been updated succesfully `, 'success');
            }else{
                Swal.fire('Error',body.message, 'error');
            }
        } catch (err) {
            Swal.fire('Error', err.message||'an error has occurred while update the product' , 'error');
        }
    }
}

export const deleteProduct = (idProduct)=>{
    return async ()=>{
        try {
            const resp = await fetchWithoutToken(`product/${idProduct}`,{},'DELETE');
            const body = await resp.json();
            if(body.ok){
                Swal.fire('Success',`The product ${body.product.name} has been deleted succesfully `, 'success');
            }else{
                Swal.fire('Error',body.message, 'error');
            }
        } catch (err) {
            Swal.fire('Error', err.message||'an error has occurred while delete the product' , 'error');
        }
    }
}

const startLoadingProductsList = ()=>({
    type: types.startLoadingProductsList
});
const loadingProductsList = (products)=>({
    type: types.loadingProductsList,
    payload: products
});
const finishLoadingProductsList = ()=>({
    type: types.finishLoadingProductsList
});

const startLoadingProduct = ()=>({
    type: types.startLoadingProduct
});
const loadingProduct = (product)=>({
    type: types.loadingProduct,
    payload: product
});
export const clearProduct = ()=>({
    type:types.loadingProduct,
    payload: {}        
});
const finishLoadingProduct = ()=>({
    type: types.finishLoadingProduct
});
