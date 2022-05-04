import './App.css';
import NavBar from './Componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Items/ItemListContainer';
import ItemDetailContainer from './Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componentes/Footer';
import NotFoundPage from './Componentes/NotFoundPage';
import ItemSedes from './Items/ItemSedes';
import ItemContacto from './Items/ItemContacto';
import IdDinamico from './Componentes/IdDinamico';
import Icon from './Componentes/CartWidget';
import CartContextProvider from './Componentes/CartContext';
import Cart from './Cart/Cart';
import FullCart from './Cart/FullCart';
import TestForm from './Formulario/Form';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar/>
        </div>  
        
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path='*' element={<NotFoundPage />} />
          <Route exact path='/sedes' element={<ItemSedes />} />
          <Route exact path='/contacto' element={<ItemContacto/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/form' element={<TestForm/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
