import React from 'react'

function Card(props) {
    return (
        <div className='col-lg-4 mt-3'>
        <div className="card">
          <img src= {props.productData.image} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.productData.title}</h5>
            <p className="card-text">{props.productData.description}</p>
            <button onClick={()=>{props.handleAddToCart(props.productData)}} className="btn btn-primary">Add Rs.{props.productData.price}</button>
          </div>
        </div>
      </div>
    )
}

export default Card
