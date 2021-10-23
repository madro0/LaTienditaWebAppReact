import { fetchWithToken } from '../helpers/fetch';
import Swal from 'sweetalert2';

export const createSale = (user, total,shoppingList)=>{
 
    return async()=>{
        
        try {
            
            const resp = await fetchWithToken('sales',{user, total, shoppingList}, 'POST');
            const body = await resp.json();
            
            if(body.ok){
                Swal.fire('Success','sale successfully completed', 'success');
            }else{
                Swal.fire('Error',body.message, 'error');   
            }

        } catch (err) {
        
        }
    }
}