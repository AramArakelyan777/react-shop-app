import PRODUCTS from "../products/products"
import { ShopContext } from "./ShopContext"
import "../css/Cart.css"
import { useContext } from "react"

function Cart() {
    const { cartItems } = useContext(ShopContext)

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
                            </div>
                        </div>
                    )
                } return <></>
            })}
            <div>
                <h3>Total: $</h3>
            </div>
        </div>
    )
}

export default Cart
