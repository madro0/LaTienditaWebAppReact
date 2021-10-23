import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../imagenes/Latiendita_vectorized2.png';

const cabecera = () => {
    return (
        <div>
            <nav class="navbar navbar-light" style={{ backgroundColor: '#d65221'}}>
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="100px" height="20px" class="d-inline-block align-top" alt="" />
                </a>
            </nav>
        </div>
    )
}

export default cabecera