import React, { useContext } from 'react'
import CartProducts from './CartProducts'
import { Link } from 'react-router-dom';
import { CartContext } from '../Componentes/CartContext'
import Button from 'react-bootstrap/Button'

function FullCart({cart, buyAll}) {

  const { valorTotal } = useContext(CartContext)
    return (
      <>
        <div className='productosTotales'>
            <div className="col-md-12">
                <CartProducts cart={cart}/>
            </div>
            <div className='valoresTotales'>
              <p >Total</p>
              <p >${valorTotal}</p>
            </div>
            <div className='botonComprar'>
              <Button variant="" className="mx-2" onClick={buyAll}>
                <Link className='botonComprar1' to='/form'>Comprar</Link></Button>
            </div>
        </div>
      </>
    )
  }
  
  export default FullCart