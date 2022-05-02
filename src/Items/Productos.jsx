import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const products = [
    {
        id:1,
        pelicula:'Uncharted: Fuera del mapa',
        precio: '500',
        resumen: 'Una precuela de la saga de videojuegos Uncharted, donde descubrimos cómo Drake llego a conocer y hacerse amigo de Sully.',
        idioma: 'Español',
        categoria: '2D',
        stock: '25',
        genero: 'Ficcion',
        imagen: require('../img/Uncharted.jpg'),

    },
    {
        id:2,
        pelicula:'Morbius',
        precio: '750',
        resumen: 'El bioquímico Michael Morbius intenta curarse de una rara enfermedad sanguínea pero en su lugar se infecta con un tipo de vampirismo.',
        idioma: 'Ingles',
        categoria: '3D',
        stock: '30',
        genero: 'Ficcion',
        imagen: require('../img/Morbius.jpg'),
    },
    {   
        id:3,
        pelicula:'The Batman',
        precio: '500',
        resumen: 'Cuando Enigma, un sádico asesino en serie, comienza a asesinar a las principales figuras políticas de Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y a cuestionar la participación de su familia.',
        idioma: 'Español',
        categoria: '2D',
        stock: '15',
        genero: 'Ficcion',
        imagen: require('../img/Batman.jpg'),
    },
    {   
        id:4,
        pelicula:'Sonic 2, la pelicula',
        precio: '500',
        resumen: 'Cuando el maníaco Dr. Robotnik regresa a la Tierra con un nuevo aliado, Knuckles the Echidna, Sonic y su nuevo amigo Tails son todo lo que se interpone en su camino.',
        idioma: 'Español',
        categoria: '2D',
        stock: '18',
        genero: 'Aventura',
        imagen: require('../img/Sonic.jpg'),
    }


 ]

export const traerProductos = (categoryId) => {
  return new Promise((resolve,reject) => {
    const peliculasFiltradas = products.filter (
        (producto) => producto.genero === categoryId
    );
      setTimeout(() => {
        if (categoryId) {
          resolve(peliculasFiltradas);
        } else {
          resolve(products)
        }
        resolve(products);
      },1000);

  })
}


export const FetchPeliculas = (idProducto) =>
{
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products.find((product) => product.id === Number(idProducto)));
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  })
};