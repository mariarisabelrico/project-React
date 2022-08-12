import React from 'react'

const CartItem = ({id, el}) => {

  //console.log(el)

  let {category,image,title,price} = el

console.log(el.category);

  return (

    <div className='item'>
    <p>
        {title}
    </p>
    <img src={image} alt={title} height="400px" width="400px"/>     
    <div className='col-md-6'>
    </div>   
    <div className='cold-md-6'>
    <h4 className='category'>{category}</h4>
    <h1 className='title'>{title}</h1>
    {/* <p className='lead'> Rating {rating && rating.rate} */}
    {/* <i className='fa fa-star'></i> */}
    {/* </p> */}
    <h3 className='price'>${price}</h3>
    {/* <p className='lead'> {description}</p> */}
    <button className='btn btn-outline-dark ms-2 px-3 py-2'>
       Remove cart
    </button> 
    </div>
  </div>  
   
  );

}

export default CartItem