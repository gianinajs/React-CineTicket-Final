import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Items/ItemDetail";

const IdDinamico = () => {
    const { id } = useParams ()

    const [peliculas, setPeliculas] = useState ({})

    useEffect(() => {
        if (id== "1") {
            setPeliculas ({ 
                id:1,
                pelicula:'Uncharted: Fuera del mapa',
                precio: '500',
                idioma: 'Español',
                categoria: '2D',
                imagen: require('../img/Uncharted.jpg'),
             })
        } else if (id== "2") {
            setPeliculas ({
                id:2,
                pelicula:'Morbius',
                precio: '750',
                idioma: 'Ingles',
                categoria: '3D',
                imagen: require('../img/Morbius.jpg'),
            })
        } else if (id== "3") {
            setPeliculas ({
                id:3,
                pelicula:'The Batman',
                precio: '500',
                idioma: 'Español',
                categoria: '2D',
                imagen: require('../img/Batman.jpg'),
            })
        } else if (id== "4") {
            setPeliculas ({
                id:4,
                pelicula:'Sonic 2, la pelicula',
                precio: '500',
                idioma: 'Español',
                categoria: '2D',
                imagen: require('../img/Sonic.jpg'),
            })

        }
            

    }, [id])

    
    return (
        <>
            <ItemDetail prod={peliculas} />
        </>

    )



}

export default IdDinamico