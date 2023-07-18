import './App.css';
import {Routes, Route} from "react-router-dom"
import Navhead from './components/Navhead';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import Footer from './components/Footer';
import Category from './pages/Category';
import CategoryId from './pages/CategoryId';
import Products from './pages/Products';
import ProductId from './pages/ProductId';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { StateContext } from './lib/ContextApi';
import { Toaster } from 'react-hot-toast'




function App() {
  return (
    <>
    <Toaster />
    <StateContext>
    <Navhead />
   <Routes>
    <Route path='/'  element={<Home />}/>
    <Route path='categories'  element={<Category />}>
    <Route path=':categoryid'  element={<CategoryId />}/>
    </Route>
    <Route path='products'  element={<Products />}>
    <Route path=':productid'  element={<ProductId />}/>
    </Route>
    <Route path='search' element={<Search />}/>
    <Route path='cart' element={<Cart />}/>
   </Routes>
   <Footer />
   </StateContext>
    </>
  );
}

export default App;
