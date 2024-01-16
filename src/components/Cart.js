import PRODUCTS from "../products/products"
import { ShopContext } from "./ShopContext"
import "../css/Cart.css"
import { useContext } from "react"

function Cart() {
    const { cartItems } = useContext(ShopContext)
    let totalPrice = 0
    for (const [key, value] of Object.entries(cartItems)) {
        totalPrice += value * PRODUCTS[key - 1].cost
    }

    return (
        <div>
            <h1>Cart Items</h1>
            {PRODUCTS.map(item => {
                if (cartItems[item.id] !== 0) {
                    return (
                        <div className="cartItem" key={item.id}>
                            <img className="cartItemImg" src={item.url} alt="cart" />
                            <div>
                                <p className="cartItemName">{item.name}</p>
                                <p className="cartItemCost">${item.cost}</p>
                                <button>-</button>
                                <input className="cartItemCount" />
                                <button>+</button>
                            </div>
                        </div>
                    )
                } return <></>
            })}
            <div>{totalPrice > 0 && <h3>Total: ${totalPrice}</h3>}</div>
        </div>
    )
}

export default Cart
