import React from 'react'
import Card  from 'react-bootstrap/Card'
import ItemCount from '../Componentes/ItemCount'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function Item ({categoryId , pelicula , precio , resumen , idioma , categoria , itemId , imagen, id}) {

    return (
            <Card className='card' key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{pelicula}</Card.Title>
                <Card.Text>${precio}</Card.Text>
                <Button variant="warning"><Link className="peliculaVer" to={`/item/${id}`}>Ver Pelicula</Link></Button>
            </Card.Body>
            </Card>


    )
}

export default Item