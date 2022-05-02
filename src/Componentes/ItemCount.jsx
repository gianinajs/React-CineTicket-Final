import Button from 'react-bootstrap/Button'
import React, { useState , useContext } from 'react'
import {CartContext} from './CartContext'
import { Link } from 'react-router-dom';

function ItemCount({stock , addCart}) {

  const [count, setCount] = useState(0);

  function adding () {
    if (count < stock) {
    setCount(count +1);}

  }
  function subs () {
    if (count > 0) {
    setCount(count -1);}
    
  }
  

  return (
      <div>
          <br>
          </br>     
          <p className='count'>{count}</p>
          <Button onClick={adding} variant="dark">+</Button>
          <Button onClick={subs} variant="dark" >-</Button>
          <Button onClick={()=> setCount (0)} variant="secondary" >Vaciar</Button>
      
        <div>
        <br>
          </br> 
          <Button onClick={()=> addCart (count)} variant="warning" >Agregar</Button>
        </div>
    </div>

  );
};

export default ItemCount