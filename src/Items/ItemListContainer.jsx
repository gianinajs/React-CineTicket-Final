import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'
import { FetchPeliculas } from './Productos';
import { traerProductos} from './Productos';
import hoyts from "../img/hoyts.png"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Waveform } from "@uiball/loaders";


const ItemListContainer = () =>  {

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);

  

    useEffect(() => {
        const db = getFirestore();

        let productosRef = collection(db, 'productos');
        if (categoryId) productosRef = query(productosRef, where("categoryId", "==", categoryId));
        
        getDocs(productosRef).then((res) => {     
            setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()})));
        });
      
    }, [categoryId]);

    return (
        <>
            <div className='componente1'>
                <div className="text-center imagenFondo"><img className='img-fluid' src={hoyts}/></div>
                <p className='intro'>En este sitio encontraran los estrenos mas recientes del cine
                mas popular de Buenos Aires</p>
                <div className={s.containerI}>
                <ItemList productos={productos}/>
                </div>
            </div>

        </>
  )
}

export default ItemListContainer