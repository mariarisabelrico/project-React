import CartItem from './Cartitem';




const ListCart = ({myData}) => {

  return (
    <div class="grid-fluid">
    
    {myData.length > 0 ? (
        myData.map((el, index) => (
              <CartItem
                key={index}
                el={el}
                id={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin Productos</td>
            </tr>
          )}

    </div>


)
}

export default ListCart