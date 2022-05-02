const producto = {
   
    id:5,
    pelicula:'The Batman',
    precio: '500',
    resumen: 'Cuando Enigma, un sádico asesino en serie, comienza a asesinar a las principales figuras políticas de Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y a cuestionar la participación de su familia.',
    idioma: 'Español',
    categoria: '2D',
    imagen: require('../img/Batman.jpg'),
}

const traerProducto = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve (producto);
        }, 2000);


        })



    }

export default traerProducto

