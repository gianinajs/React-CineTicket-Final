import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Componentes/CartContext';

function CartProduct({producto}) {

    const { removeFromCart } = useContext(CartContext)

    return (
        <>
        <tr className="carritoProducto ">
            <td><img className="batman3" src={producto.imagen}/></td>
            <td className="carritoProducto__titulo text-light">{producto.pelicula}</td>
            <td className="carritoProducto__precio text-light">{producto.precio}</td>
            <td className="carritoProducto__cantidad text-light">{producto.count}</td>
            <td className="carritoProducto__subtotal text-light">${producto.precio * producto.count}</td>
            <td className="carritoProducto__eliminar text-light">   
                <button onClick={() => removeFromCart(producto.id)}> Eliminar</button>
            </td>
        </tr>

        </>


    )



}export default CartProduct