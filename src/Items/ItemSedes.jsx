import React  from "react";
import hoyts from "../img/hoyts.png"


const ItemSedes = () => {


    return (
        <>
        <div className="sedesTotales">
        <div className="text-center imagenFondo"><img className='img-fluid' src={hoyts}/></div>
            <ul className="sedes">
                <li>Hoyts Abasto</li>
                <li>Hoyts Dot</li>
                <li>Hoyts Unicenter</li>
                <li>Cinemark Caballito</li>
                <li>Cinemark Palermo</li>
                <li>Cinemark Puerto Madero</li>
                <li>Cinemark Soleil</li>
            </ul>
        </div>
        </>

    )

}

export default ItemSedes