import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, searchProducts } from '../../../../actions/products';
import Swal from 'sweetalert2';
import { createSale } from '../../../../actions/sales';

export const SalasSystemScreen = () => {
    
    const dispatch = useDispatch(); 
    const {products} = useSelector( state => state.product );
    const idUser = useSelector( state => state.auth.id);
    const [showProductsSearch,setShowProductsSearch ] = useState(false);
    const formValues = {id:"", name:"", price:"", stock:"" };
    const [currentProducto, setCurrentProducto] = useState(formValues);
    const [shopingList, setShopingList] = useState([]);
    const {id, name, price, stock } = currentProducto;
    const [indexSelectedItemShoping, setIndexSelectedItemShoping] = useState(-1);
    const [totalShoping, setTotalShoping] = useState(0);

    useEffect(() => {
        const optionsSearch =  document.getElementById("selectSearchArea");
        optionsSearch.addEventListener('mousedown',(e)=>{
            e.preventDefault(); //evita que desenfoque de searchInput
            setShowProductsSearch(true);
        });

        updateFormValues({id : currentProducto.id, name : currentProducto.name, price : currentProducto.price, stock : currentProducto.stock});
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [shopingList])

    const getProducts = (event)=> {
        let textSearch = event.target.value;
        if(textSearch.length===0){
            dispatch(getAllProducts());
        }else{
            dispatch(searchProducts(textSearch));
        }
        
        setShowProductsSearch(true);
    }
    const selectItem = (item)=>{
        if(item.stock===null || item.stock >0   ){
            // updateFormValues({id : item.id, name : item.name, price : item.price, stock : item.stock});
            setShopingList([...shopingList,{id : item.id, name : item.name, price : item.price, stock : item.stock}]);
            
        }else{
            Swal.fire('Error', 'No hay la cantidad de unidades suficientes', 'error');
        }
        setShowProductsSearch(false);
    }
    const updateFormValues=(item)=>{
        for (const element in item) {
            if(item[element] === null){
                item[element] = "";
            }
        }   
        setCurrentProducto(item)
    }
    const offFocus = ()=>{
        setShowProductsSearch(false);
    }

    const selectItemShopingList = (item,index)=>{
        updateFormValues({id : item.id, name : item.name, price : item.price, stock : item.stock});
        setIndexSelectedItemShoping(index)
    }
    const hanbleChangItemShoping=(e, i, id)=>{
        let arryAux = [...shopingList];
        arryAux[i].stock = e.target.value; 
        setShopingList(arryAux);
    }
    const calculateTotalPrice=()=>{
        let total = 0;
        shopingList.map(item=>{
            total+=item.price*item.stock;
        })
        setTotalShoping(total);
    }
    const removeItemShopingList=(i)=>{
        setIndexSelectedItemShoping(-1)
        let arryAux = [...shopingList];
        arryAux.splice(i,1);
        setShopingList(arryAux);

        if(indexSelectedItemShoping<0){
            setCurrentProducto({id:"", name:"", price:"", stock:"" });
        }
    }

    const finalizeSale=()=>{
        let list = [];
        for(let item in shopingList){
            let aux = {'amount':  shopingList[item]['stock'], 'productId':  shopingList[item]['id']};
            list.push(aux);
        }
        if(shopingList.length<=0){
            Swal.fire('Error','The shoppping list cannot be empty', 'error');
        }else{
            dispatch(createSale(idUser, totalShoping, list));
        }
    } 
    return (
        <div className=" section salesSystem ">
            <div className="salesSystem__form">
                <div>
                    <div className="input select__search">
                        <label>Bucar producto</label>
                        <input className="" type="text" placeholder="search an product..." onChange={getProducts} onClick={getProducts} id="aws" onBlur={offFocus} />
                        <div>
                            <ul className={`select__search-area ${showProductsSearch ? 'select__search-area-visible' : ''}`} id="selectSearchArea" >
                                {products.map((item, index) => (
                                    <li className="select__search-item" key={index} value={item.id} onClick={() => selectItem(item)}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="db-grid">
                    <div>
                        <div className="input">
                            <label>Codigo del producto</label>
                            <input className="" type="text" placeholder="" readOnly name="id_product" value={id} />
                        </div>
                        <div className="input">
                            <label>Nombre del producto</label>
                            <input className="" type="text" placeholder="" readOnly name="name" value={name} />
                        </div>
                        <div className="input">
                            <label>Valor del producto</label>
                            <input className="" type="number" placeholder="$" readOnly name="price" value={price} />
                        </div>
                        <div className="input">
                            <label>Cantidad de producto En existencia</label>
                            <input className="" type="text" placeholder="" readOnly name="stock" value={stock} />
                        </div>
                    </div>
                    <div className="salesSystem__list">
                        <div className="salesSystem__list-container">
                            <table className="salesSystem__table">
                                <thead>
                                    <tr>
                                        <th>Name Product</th>
                                        <th>Value</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        shopingList.map((item, index)=>(
                                            <tr className={indexSelectedItemShoping===index ? 'salesSystem__table-selectedItem':''} key={index} onClick={()=>selectItemShopingList(item,index)} >
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <input type="number" className={indexSelectedItemShoping===index ? 'salesSystem__table-selectedItem-number':''}  min="0" max="9" value={item.stock} onChange={e=>hanbleChangItemShoping(e, index, item.id)}/>
                                                </td>
                                                <td onClick={()=>removeItemShopingList(index)}><i className='bx bx-trash'></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <hr/>
                        <div className="salesSystem__total">
                            <h2>Total: </h2>
                            <label>${totalShoping}</label>
                        </div>
                        <button className="button" onClick={finalizeSale}>Finalizar venta</button>
                    </div>

                </div>

            </div>
            <div >

            </div>
        </div>
    )
}












