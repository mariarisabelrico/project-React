import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ls = (product) => {
    // console.log(product)  

    const data  =  localStorage.getItem('cart') || [];
    console.log(localStorage.getItem("cart"));
    // console.log(data);

    if(localStorage.getItem("cart") === null) {
        data.push(product);
        localStorage.setItem("cart", JSON.stringify(data));

    }

    if (localStorage.getItem("cart") !== null) {

        const dataLS = JSON.parse(localStorage.getItem("cart")) ||[];
        if(product){
          dataLS.push(product);
          localStorage.setItem("cart", JSON.stringify(dataLS));}
      }

    // console.log(data);
}

const handleclick = (product) => {
    ls(product);
    // console.log(product)
}




const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {

            setProduct(data);
            console.log(data.title)
            console.log(data)


        });
        
        
      }, [product]);
      console.log(product)

    //  const Loading = () => {
    //    return(
    //         <>
    //              Loading.....
    //         </>
    //     )
    //  }
    
    // const ShowProduct = () => {
        return(

            <div className='product-card'>
            <p className='text'>
                {product.title}
                <img src={product.image} alt={product.title} height="400px" width="400px"/>  
            </p>
              
            {/* <div className='col-md-6'>
            </div>    */}
            <div className='cold-md-6 description'>
            <h4 className='text-uppercase text-black-50'>{product.category}</h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead'> Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
            <p className='lead'> {product.description}</p>
            <button className='btn btn-outline-dark ms-2 px-3 py-2' onClick={() =>handleclick(product)}>
                Add to cart
                
            </button> 

              {/* <NavLink className= 'btn btn-outline-dark ms-2 px-3 py-2'>
                go to cart
            </NavLink>                        */}

            </div>
            </div>   
        )

        // return(
        //     <div>
        //         <div className='container'>
        //             <div className='row'>
        //                 {loading ? <Loading/> : <ShowProduct/>}
        //             </div>
        //         </div>
        //     </div>
        // );
};            
              


export default Product