import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Componentes/CartContext';

function CartProduct({producto}) {

    const { removeFromCart } = useContext(CartContext)

    return (
        <>
        <tr className="carritoProducto">
            <td><img className="batman3" src={producto.imagen}/></td>
            <td className="carritoProducto__titulo">{producto.pelicula}</td>
            <td className="carritoProducto__precio">{producto.precio}</td>
            <td className="carritoProducto__cantidad">{producto.count}</td>
            <td className="carritoProducto__subtotal">${producto.precio * producto.count}</td>
            <td className="carritoProducto__eliminar">   
                <button onClick={() => removeFromCart(producto.id)}> Eliminar</button>
            </td>
        </tr>

        </>


    )



}export default CartProduct