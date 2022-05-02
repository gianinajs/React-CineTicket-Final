import React from "react";
import { Link } from "react-router-dom";
import hoyts from "../img/hoyts.png"

const ItemContacto = () => {

    return (
        <> 
        <div className="contacto">
        <div className="imagenFondo2"><img className='hoyts' src={hoyts}/></div>
            <ul className="contacto2">
                <li>Whatsapp</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </div>
        </>


    )

}

export default ItemContacto