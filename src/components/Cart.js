import PRODUCTS from "../products/products"
import { ShopContext } from "./ShopContext"
import "../css/Cart.css"
import { useContext } from "react"

function Cart() {
    const { cartItems, addAnItem, removeAnItem, updateAnItem } = useContext(ShopContext)

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
                        <div key={item.id} className="cartItem">
                            <img className="cartItemImg" src={item.url} alt="cart" />
                            <div>
                                <p className="cartItemName">{item.name}</p>
                                <p className="cartItemCost">${item.cost}</p>
                                <button className="cartItemDecrease" onClick={() => removeAnItem(item.id)}>-</button>
                                <input className="cartItemCount" value={cartItems[item.id]} onChange={(evt) => updateAnItem(Number(evt.target.value), item.id)} />
                                <button className="cartItemIncrease" onClick={() => addAnItem(item.id)}>+</button>
                            </div>
                        </div>
                    )
                } return null
            })}
            <div>{totalPrice > 0 && <h3>Total: ${totalPrice}</h3>}</div>
        </div>
    )
}

export default Cart
