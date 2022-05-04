
import { addDoc, getFirestore, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button'
import { CartContext } from '../Componentes/CartContext'
import CheckoutForm from "./CheckoutForm";
import CheckoutMessage from "./CheckoutMessage";
import probando from "../img/probando.jpg"

export default function TestForm() {

    const { valorTotal, cart, buyAll } = useContext(CartContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const [ OrderId, setOrderId ] = useState ();

    const order = {
        buyer: { name, phone, email },
        items: cart,
        total: valorTotal,
        date: serverTimestamp()
    };

    const sendOrder = () => {
        const db = getFirestore();
        const ventasRef = collection(db, "ventas");
        
        addDoc(ventasRef, order).then(({ id }) => {
            setOrderId(id);
            buyAll();
        })
        }



    return (
    <>
        <div className="contenedorForm">  
            <img src={probando} className="img-fluid" alt="..."></img>
            { 
                !OrderId ?
                <CheckoutForm 
                    name={name}
                    email={email}
                    phone={phone}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    sendOrder={sendOrder}
                /> :
                <CheckoutMessage
                    OrderId={OrderId}
                />
            } 
        </div>  
    </>

    );

}