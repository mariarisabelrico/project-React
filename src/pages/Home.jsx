import React from 'react'
import Products from './Products';



const Home = () =>{
  return (
    <div className='hero'>
    <div className="card bg-dark text-white border-0">
  <img src="/assets/ecommerce3.jpg" className="card-img" alt="backgroung"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    
  </div>
  </div> 
  <Products/>
  
  
  </div>
  
    
  );
};

export default Home