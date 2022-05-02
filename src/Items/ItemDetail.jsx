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
        <div>
            <div className="productoDetalle">
                <img className="batman" src={producto.imagen}/>
                <div className="batman2">
                    <h2>{producto.pelicula}</h2>
                    <h3 className="resumen">{producto.resumen}</h3>
                    <h3>{producto.idioma}</h3>
                    <h3>{producto.categoria}</h3>
                    <h3>${producto.precio}</h3>
                    { number === 0 ? <ItemCount stock={producto.stock} addCart={addCart} />: <Button variant="light" ><Link className="agregarCarrito" to='/cart'>Ir al Carrito</Link></Button>
                    }
                </div>
            </div>
        </div>
        </>
    );


};

export default ItemDetail