import React, { useContext } from 'react'
import CartProducts from './CartProducts'
import { Link } from 'react-router-dom';
import { CartContext } from '../Componentes/CartContext'
import Button from 'react-bootstrap/Button'

function FullCart({cart, buyAll}) {

  const { valorTotal } = useContext(CartContext)
    return (
      <>
          <div className="col-md-8">
              <CartProducts cart={cart}/>
          </div>
          <div>
            <p>Total</p>
            <p>${valorTotal}</p>
          </div>
          <div className='botonComprar'>
            <Button variant="warning" className="mx-2" onClick={buyAll}>
              <Link to='/form'>Comprar</Link></Button>
          </div>
      </>
    )
  }
  
  export default FullCart