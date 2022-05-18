import React from 'react'
import Card  from 'react-bootstrap/Card'
import ItemCount from '../Componentes/ItemCount'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { CardGroup } from 'react-bootstrap';

function Item ({categoryId , pelicula , precio , resumen , idioma , categoria , itemId , imagen, id}) {

    return (
        <div className="producto">
            <div className="producto__img">
                <img src={imagen} />
            </div>
            <h5 className='producto__titulo'>{pelicula}</h5>
            <h5 className='producto__categoria'>{categoria}</h5>
            <h5 className='producto__precio'>${precio}</h5>
            <Link className="producto__ver" to={`/item/${id}`}>Ver Pelicula</Link>
        </div>
    )
}

export default Item