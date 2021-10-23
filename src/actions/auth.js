import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';


export const startLoginEmailPassword = (email, password)=>{
    return async (dispatch)=>{
        const resp = await fetchWithoutToken('login', {email, password}, 'POST');
        const body = await resp.json();

        if(body.ok){

            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                id:body.user.id,
                name:body.user.name
            })); 

        }else{
            Swal.fire('Error', body.message, 'error');
        }
    }
}
export const loginGoogle = (googleToken)=>{
    return async(dispatch)=>{
        const resp = await fetchWithoutToken('login/google', {googleToken}, 'POST');
        const body = await resp.json();

        console.log(body);
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch(login({
                id:body.user.id,
                name:body.user.name
            }));

        }else{
            Swal.fire('Error', body.message, 'error');
        }
    }
}
export const startCheking = ()=>{
    return async (dispatch)=>{
        const resp = await fetchWithToken('login/renew');
        const body = await resp.json();
        
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                id: body.user.id,
                name: body.user.name
            }));

        }else{
            dispatch(checkingFinish());
        }

    }
}

const checkingFinish = ()=>({
    type: types.authCheckingFinish
});

export const login = (user)=>({
    type: types.login,
    payload: user
});

