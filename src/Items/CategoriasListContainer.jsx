import React, { useState, useEffect } from "react";
import { FetchGenero } from "./Categorias"
import CategoriasList from "./CategoriasList";

const CategoriasListContainer = ({}) => {
  const [genero, setGenero] = useState([]);

  useEffect(() => {
      
    FetchGenero()
        .then((resp) => setGenero(resp))
        .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <CategoriasList cats={genero} />
    </>
  );
};

export default CategoriasListContainer;
