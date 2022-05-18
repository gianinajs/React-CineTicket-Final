
import { addDoc, getFirestore, collection, serverTimestamp, doc, updateDoc, getDoc} from "firebase/firestore";
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
    const [address, setAddress] = useState("");


    const [ OrderId, setOrderId ] = useState ();

    const order = {
        buyer: { name, phone, email, address },
        items: cart,
        total: valorTotal,
        date: serverTimestamp()
    };

    const sendOrder = () => {
        const db = getFirestore();

        cart.forEach((prod) => {
            const prodRef = doc(db, "productos", prod.id);
    
            getDoc(prodRef).then((res) => {
                updateDoc(prodRef, {
                    "stock": res.data().stock - prod.count
                })
            })
        })

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
                    address={address}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    setAddress={setAddress}
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