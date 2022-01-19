import React from 'react'

function Cart(props) {
    return (
        props.cartItems.length > 0 ?
        <ol class="list-group list-group-numbered">
       {
         props.cartItems.map((items) => {
           return <li class="list-group-item d-flex justify-content-between align-items-start">
             <div class="ms-2 me-auto">
               <div class="fw-bold">{items.title}</div>
               Rs.{items.price}
             </div>
             <button onClick={()=>{props.handleRemoveCart(items)}} class="badge bg-danger">X</button>
           </li>
         }) 
       }
     </ol> : <span><h3 className='text-dark'>Empty Cart</h3></span>
    )
}

export default Cart
