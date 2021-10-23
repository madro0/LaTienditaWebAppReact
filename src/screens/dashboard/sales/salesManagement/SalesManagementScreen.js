import React from 'react'

export const SalesManagementScreen = () => {
    const openModal=()=>{
        const Xmodal = document.getElementById('Xmodal'),
              modal = document.getElementById('modal');
        
        modal.classList.toggle('salesManagemen__modal-active');
        console.log('hola');
    }

    return (
        <div className=" section  ">
             

            <div className="input salesManagement__search">
                    <label>Search sale</label>
                    <input className="" type="text" placeholder="search..."/>
                </div>
             <div>
                <table className="salesManagemen__table">
                    <thead>
                        <tr>
                            <th>Id Sale</th>
                            <th>Client</th>
                            <th>Seler</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td onClick={openModal} ><i className='bx bx-windows' ></i></td>
                        </tr>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td  onClick={openModal}><i className='bx bx-windows' ></i></td>
                        </tr>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td  onClick={openModal}><i className='bx bx-windows' ></i></td>
                        </tr>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td onClick={openModal}><i className='bx bx-windows' ></i></td>
                        </tr>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td onClick={openModal}><i className='bx bx-windows' ></i></td>
                        </tr>
                        <tr >
                            <td>AC336 508 2157</td>
                            <td>Juan Romero</td>
                            <td>Daniel Madroñero</td>
                            <td>10/01/2021</td>
                            <td>$10000</td>
                            <td onClick={openModal}> <i className='bx bx-windows' ></i></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            

            <div className="salesManagement__modal " id="modal">
                
                <div className="salesManagemen__modal-content">
                    <h2 className="services__modal-title">Edit sale </h2>
                    <i className='bx bx-x salesManagement__modal-close' id="Xmodal" onClick={openModal}></i>
                    <br></br>
                    <div className=" db-grid">
                        <div>
                        <div className="input ">
                        <label>Id sale</label>
                        <input className="" type="text" placeholder="AC336 508 2157"/>
                    </div>
                        <div className="input ">
                        <label>Client</label>
                        <input className="" type="text" placeholder="Juan Romero"/>
                        </div>
                        <div className="input ">
                        <label>Cedula Client</label>
                        <input className="" type="text" placeholder="1233192565"/>
                        </div>
                        <div className="input">
                        <label>Seler</label>
                        <input className="" type="text" placeholder="Daniel Madroñero"/>
                        </div>
                    </div>
                    <div>
                        <div className="input">
                        <label>Cedula Seler</label>
                        <input className="" type="text" placeholder="1233198567"/>
                    </div>
                        <div className="input">
                        <label>Date</label>
                        <input className="" type="text" placeholder="10/10/2021"/>
                        </div>
                        <div className="input">
                        <label>Total</label>
                        <input className="" type="text" placeholder="$10.000"/>
                        </div>
                        <button className=" button">
                            <i className='bx bxs-edit'></i>
                            Edit
                        </button>
                    </div>
                
                    </div>
                    </div>
            </div>
       

          </div>
    )
}
