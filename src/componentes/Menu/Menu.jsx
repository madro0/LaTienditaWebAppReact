import React from 'react'
import './menu.css'



const menu = () => {
    return (
    <div>       
             
         <nav class="navbar navbar-expand-lg navbar-light">
         <div class="container-fluid">
         <a class="navbar-brand" href="#"><h1>Menu</h1></a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarText">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
         <a class="nav-link" href="http://localhost:4000/product"><h4>Productos</h4></a>
         </li>
         <li class="nav-item">
         <a class="nav-link" href="http://localhost:4000/provider"><h4>Proveedores</h4></a>
         </li>
         <li class="nav-item">
         <a class="nav-link" href="#"><h4>Ventas</h4></a>
         </li>
         </ul>
         <span class="navbar-text">
         <a class="nav-link" href="http://localhost:4000/login"><h6>Login</h6></a>   
         </span>
         </div>
         </div>
         </nav>
 
         <div class="background">
         <div class="imagen"> </div> 
         </div> 
                           
         <div class="footer"> </div>                       

    </div>
       
    )
}

export default menu;