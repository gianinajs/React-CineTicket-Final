import React, { useState, useContext } from "react";
import ItemCount from "../Componentes/ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from '../Componentes/CartContext'
import Button from 'react-bootstrap/Button'

const ItemDetail =({producto}) => {

    const [number, setNumber] = useState (0)
    const {addToCart} = useContext(CartContext);
    const addCart = (count) => {
        setNumber(count)
        addToCart ({...producto, count})
}
    return (
        <>
            <div className="productoDetalle">
                <img class="img-fluid" width={700} height={100} src={producto.imagen}/>
                <div className="card text-center col-sm-3 bg-black" >
                    <h5 className="card-header">{producto.pelicula}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{producto.resumen}</h5>
                        <p className="card-text">{producto.idioma}</p>
                        <p className="card-text">{producto.categoria}</p>
                        <p className="card-text">${producto.precio}</p>
                        { number === 0 ? <ItemCount stock={producto.stock} addCart={addCart} />: 
                            <Button variant="" >
                                <Link className="agregarCarrito" to='/cart'>Ir al Carrito
                                </Link>
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    );


};

export default ItemDetail