import { fetchWithToken } from "../helpers/fetch";
import Swal from 'sweetalert2';
import { types } from "../types/types";

export const getAllProviders = ()=>{

    return async(dispatch, getState)=>{
        
        try {
            dispatch(startLoadingProvidersList());
            const resp = await fetchWithToken('provider');
            const body = await resp.json();
            if(body.ok){
                const providers = body.providers;
                dispatch(providersListLoaded(providers));
                dispatch(finishLoadingProvidersList());
                // console.log(getState());
            }else{
                Swal.fire({
                    position:'top-end',
                    icon: 'error',
                    showCancelButton: false,
                    timer: 1500
                })
            }
            
        } catch (err) {
            console.log(err)
            dispatch(finishLoadingProvidersList());
        }
       
    }
}
export const providersListLoaded = (providers)=>({
    type: types.loadProvidersList,
    payload: providers
});

export const startLoadingProvidersList  =()=>({
    type:types.startLoadingProvidersList
})
export const finishLoadingProvidersList =()=>({
    type:types.finishLoadingProvidersList
})
