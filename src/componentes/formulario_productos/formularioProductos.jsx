import React, { Component } from 'react';
import Cabecera from '../cabecera/cabecera';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formularioProductos.css';
import Supermercado from '../../imagenes/supermercado.jpg';
import { Link } from 'react-router-dom';

const formularioProductos = () => {
    return (
        <div>
            <Cabecera />
            <div class="centrar justify-content-center">
                <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                            <h1>Registrar Productos</h1>
                            <img src={Supermercado} class="img-fluid" alt="Responsive image" />
                        </div>
                        <div class="col-5">
                            <div class="d-flex flex-column p-2">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Codigo Producto</label>
                                    <input type="text" class="form-control" placeholder="Codigo" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Nombre Producto</label>
                                    <input type="text" class="form-control" placeholder="Nombre" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Descripcion Producto</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Precio</label>
                                    <input type="text" class="form-control" placeholder="Valor en pesos" />
                                </div>
                                <br/>
                                <div class="row">
                                    <div class="col">
                                        <button type="submit" class="btn btn-primary">Agregar</button>
                                    </div>
                                    <div class="col">
                                        <Link to="/Productos" class="btn btn-primary">Listar Productos</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default formularioProductos