import React from 'react';
import { Link } from 'react-router-dom';
import { EmojiFrown } from 'react-bootstrap-icons';

function EmptyCart() {
  return (
    <>
        <div className="emptyCart">
            <h4>Carrito vacío.</h4>
            <Link to="/" className='volverTickets'><a>Volver a la Ticketera</a></Link>
        </div>
    </>
  )
}

export default EmptyCart;