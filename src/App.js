import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {
  const productList = [
    {
      name:"realme",
      price:1000,
      quantity:0,
    },
    {
      name:"redmi",
      price:9900,
      quantity:0,
    }
  ]
  return (
   <>
   <Navbar />
   <div className="mt-5 container"> 
   <ProductList productList = { productList } />
   </div>
   </>
  );
}

export default App;
