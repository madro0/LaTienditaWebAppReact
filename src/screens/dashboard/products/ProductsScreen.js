import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearProduct, createProduct, deleteProduct, getAllProducts, getProduct, searchProducts, updateProduct } from '../../../actions/products';
import {getAllProviders} from '../../../actions/providers';
import { useForm } from '../../../hooks/useForm';

export const ProductsScreen = () => {

    const [createUpdate, setCreateUpdate] = useState('Create');
    const [searchInput, setSearchInput] = useState('');
    
    const dispatch = useDispatch();
    
    const {providers, loading} = useSelector( state => state.provider );
    const {products, product} = useSelector(state => state.product )
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [updateP, setUpdateP] = useState(false);
    
    const [formValues, handleInputChange, handleInputChangeSelect, inputChange] = useForm({
        name: '',
        price: '',
        provider: '',
        stock: 9
    });

    const {name, price, provider, stock} = formValues;
    
    const createProductHandler =(e)=>{
        e.preventDefault();
        if(createUpdate==='Create'){
            dispatch(createProduct(name, price, stock, provider));
            handlerSearchProducts();
        }else{
            dispatch(updateProduct(product.id, name, price, stock, provider));
            handlerSearchProducts();
            setCreateUpdate('Create');
            dispatch(clearProduct());
        }

    }
    const fetchProviders = ()=>{
        dispatch(getAllProviders())
    }
    const handlerInputSelect = (e)=>{
        setUpdateP(true);
        const target={
            name: e.target.name,
            value: e.target.value
        }
        handleInputChangeSelect(target);
    }
    
    useEffect(() => {
        handlerSearchProducts();
    }, [searchInput, loadingProducts, provider ]);
    
    useEffect(()=>{
        feetInputs();
    },[provider,createUpdate, product])
    
    const handlerSearchProducts = () => {
        if(searchInput.length===0){
            dispatch(getAllProducts());
        }else{
            dispatch(searchProducts(searchInput));
        }
        setLoadingProducts(false);
    }
    const handleDeleteProduct = (id)=>{
        dispatch(deleteProduct(id));
        setLoadingProducts(true)
    }
    const selectProductoToUpdate = (id)=>{
        setCreateUpdate('Update');
        dispatch(getProduct(id));
        fetchProviders();
    }
    const feetInputs = ()=>{
        if( createUpdate ==='Update' && updateP===false ){
            inputChange({name: product.name, price: product.price, provider: product.providerId, stock: product.stock});
        }
        if( Object.keys(product).length===0){
            inputChange({name: "", price: "", provider: "", stock: ""});
            setUpdateP(false);
        }
    }
    return (
        <div>
            <div className="section products">
            <div className="product__info">
                <h1 className="producto__info-title">{createUpdate} Producto</h1>
                <form onSubmit={createProductHandler} className="grid-form">
                    <div className="input">
                        <label>Id Product</label>
                        <input type="text" placeholder="AB03 0934DF O85E" />
                    </div>
                    <div className="input">
                        <label>Product`s name</label>
                        <input type="text" name="name" placeholder="Arroz con coco" value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="input">
                        <label>Product`s price</label>
                        <input type="text" name="price" placeholder="$4500" value={price} onChange={handleInputChange}/>
                    </div>
                    <div className="input">
                        <label>Product`s provider</label>
                    <select onClick={fetchProviders} name="provider" value={provider} select={provider} onChange={handlerInputSelect} >
                            <option value="" disabled>Select an option</option>
                            {
                                loading && providers.length===0? <option>Loading...</option>: 
                                providers.map((provider, i) => (
                                    
                                    <option key={i} name="provider"  value={provider.id}> {provider.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="input">
                        <label>Product`s stock</label>
                        <input type="number" name="stock" min="0" value={stock} onChange={handleInputChange}/>
                    </div>
                    <button type="submit" className="button" >
                        <i className='bx bx-plus-circle'></i>    
                        {createUpdate} Product
                    </button>       
                </form>
            </div>
             <hr/>                     
            <div className="product__list">
                <h2 className="product__list-tittle">Products list</h2>
                <div className="input product__search">
                    <label>Search Product</label>
                    <input type="text"  placeholder="Search..."  onChange={(e)=>setSearchInput(e.target.value)}/>
                </div>
                <table >
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Probider Name</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        products.map((item, i)=>(
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>{item.providerId}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <i className='bx bx-trash'  onClick={()=>handleDeleteProduct(item.id)}></i>
                                    <i className='bx bx-edit' onClick={()=>selectProductoToUpdate(item.id)}></i>
                                </td>
                            </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}
