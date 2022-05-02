import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const productos = [
    {
        id:1,
        pelicula:'Uncharted: Fuera del mapa',
        precio: '500',
        resumen: 'Una precuela de la saga de videojuegos Uncharted, donde descubrimos cómo Drake llego a conocer y hacerse amigo de Sully.',
        idioma: 'Español',
        categoria: '2D',
        genero: 'Ciencia Ficcion',
        imagen: require('../img/Uncharted.jpg'),

    },
    {
        id:2,
        pelicula:'Morbius',
        precio: '750',
        resumen: 'El bioquímico Michael Morbius intenta curarse de una rara enfermedad sanguínea pero en su lugar se infecta con un tipo de vampirismo.',
        idioma: 'Ingles',
        categoria: '3D',
        genero: 'Ciencia Ficcion',
        imagen: require('../img/Morbius.jpg'),
    },
    {   
        id:3,
        pelicula:'The Batman',
        precio: '500',
        resumen: 'Cuando Enigma, un sádico asesino en serie, comienza a asesinar a las principales figuras políticas de Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y a cuestionar la participación de su familia.',
        idioma: 'Español',
        categoria: '2D',
        genero: 'Ciencia Ficcion',
        imagen: require('../img/Batman.jpg'),
    },
    {   
        id:4,
        pelicula:'Sonic 2, la pelicula',
        precio: '500',
        resumen: 'Cuando el maníaco Dr. Robotnik regresa a la Tierra con un nuevo aliado, Knuckles the Echidna, Sonic y su nuevo amigo Tails son todo lo que se interpone en su camino.',
        idioma: 'Español',
        categoria: '2D',
        genero: 'Aventura',
        imagen: require('../img/Sonic.jpg'),
    }


 ]
export default productos;