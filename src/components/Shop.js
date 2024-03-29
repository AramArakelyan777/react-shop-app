import PRODUCTS from "../products/products"
import "../css/Shop.css"
import { ShopContext } from "./ShopContext"
import { useContext } from 'react'

function Shop() {
    const { cartItems, addAnItem } = useContext(ShopContext)

    return (
        <div className="productsContainer">
            {PRODUCTS.map(item => {
                return (
                    <div className="product" key={item.id}>
                        <img src={item.url} alt="product" />
                        <h2>{item.name}</h2>
                        <p>Cost: ${item.cost}</p>
                        <button className="addToCart" onClick={() => addAnItem(item.id)}>Add To Cart {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop
