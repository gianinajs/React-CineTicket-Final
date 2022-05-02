const categorias = [
    {
       titulo:"Ciencia Ficcion"
    },
    {
       titulo:"Terror"
    },
    {
       titulo:"Drama"
    },
    {
       titulo:"Aventura"
    },
    {
       titulo:"Comedia"
    }
  ]

export const FetchGenero = () =>
{
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(categorias);
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  })
};