import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Componentes/CartContext";
import hoyts from "../img/hoyts.png";
import FullCart from './FullCart';
import EmptyCart from './EmptyCart';
 

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <> 
        <div className="contacto">
        <div className="imagenFondo2"><img className='hoyts' src={hoyts}/></div>
        { cart.length > 0 ? <FullCart cart={cart}/> : <EmptyCart/> }
        </div>
        </> 


    )

}

export default Cart