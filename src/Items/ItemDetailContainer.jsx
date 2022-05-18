import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { FetchPeliculas } from "./Productos";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const { itemId } = useParams ();

    useEffect(() => {

        const db = getFirestore();
        const prodRef = doc(db, "productos", itemId);
        getDoc(prodRef).then((res) => {
            setProducto({id: res.id, ...res.data()});
        });
  
    }, [])



    return (
        <>  
            <ItemDetail producto={producto}/>
        </>
    );


};

export default ItemDetailContainer