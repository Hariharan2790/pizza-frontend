import React, { useState } from 'react'
import Card from './Card.js'
import Cart from './Cart.js'

function Userdashboard() {

    const [Products, setProducts] = useState([
        {
            id: 1,
            title: "Tandoori Paneer pizza",
            image: "https://adminsc.pizzahut.lk//images/mainmenu/e12644fa-8ecf-4fbe-beb7-abd5c08074f0.jpg",
            description: "Spiced paneer, Onion, Green Capsicum & Red Paprika in Tandoori Sauce",
            price: 529
        },
        {
            id: 2,
            title: "Veggie Supreme",
            image: "https://adminsc.pizzahut.lk/images/mainmenu/veggiesupreme0a6fe2bfa0174696b4b5b9a9c425497e.jpg",
            description: "Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn",
            price: 569
        },
        {
            id: 3,
            title: "Chicken Supreme",
            image: "https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg",
            description: "Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka",
            price: 629
        },
        {
            id: 4,
            title: "Chicken Tikka",
            image: "https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg",
            description: "Chicken Tikka, Onion, Tomato",
            price: 569
        },
        {
            id: 5,
            title: "Triple Chicken Feast",
            image: "https://adminsc.pizzahut.lk/images/mainmenu/doublechickencheesefiesta42d11b7255394042b7a066dbb428d1b4.jpg",
            description: "Schezwan Chicken Meatball, Herbed Chicken, Chicken Sausage, Green Capsicum, Onion, Red Paprika",
            price: 629
        }
    ])

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    let handleAddToCart = (product) => {
        setCartItems([...cartItems, product])
        setTotal(total + product.price)
    }

    let handleRemoveCart = (product) => {
        setTotal(total - product.price)
        let removedItem = cartItems.filter(obj => obj.id !== product.id);
        setCartItems([...removedItem])

    }
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                        <h1 className="text-white">choose your pizza</h1>
                        {
                            Products.map((product) => <Card productData={product} handleAddToCart={handleAddToCart}></Card>)
                        }

                    </div>
                </div>
                <div className='col-lg-4'>

                    <h1 className="text-white">Cart details</h1>

                    <Cart cartItems={cartItems} handleRemoveCart={handleRemoveCart} />

                    <h4 className="p-1 mb-2 bg-success text-white">Total - {total}</h4>

                    <div class="d-grid">
                        <button class="btn btn-primary">Checkout    </button>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Userdashboard
