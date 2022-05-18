import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import CheckoutProduct from "./CheckoutProduct";

function CheckoutMessage({OrderId}) {

  const [items, setItems] = useState([]);


  useEffect(() => {

    const db = getFirestore();
    const prodRef = doc(db, "ventas", OrderId);
    getDoc(prodRef).then((res) => {
        setItems(res.data().items);
    });

  }, [OrderId])

  return (
    <>
      <div className='ordenFinal'>
        <p>¡Muchas gracias por su compra!</p>
        <p className='compraOrder'>Su número de orden es: {OrderId}</p>
        <p className='compraOrder'>Detalles de tu compra:</p>
        {items.map((item) => (
            <CheckoutProduct key={item.id} item={item} />
        ))}
      </div>
    </>
  )
  }

export default CheckoutMessage