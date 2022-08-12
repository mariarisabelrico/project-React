import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Products from './pages/Products';
import Product from './pages/Product';
import ListCart from './components/ListCart';



let myDataInit = JSON.parse(localStorage.getItem("cart")) || [];



function App() {
  const [myData, setMyData] = useState(myDataInit);


 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(myData));
 
   return () => {
     
   }
 }, [myData])
 


  return (
  <>
  
  <Navbar myData={myData}/> 
  

  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>  
  <Route path='/products/:id' element={<Product/>}/> 
  <Route path='/cart' element={<ListCart  myData={myData} />} />
  </Routes>
   
  
  {/* <Home/> */}
  

  </>
  );
}

export default App;
