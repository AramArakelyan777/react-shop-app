import PRODUCTS from "../products/products"
import "../css/Cart.css"

function Cart() {
    return (
        <div>
            <h1>Cart Items</h1>
            {PRODUCTS.map(item => {
                return (
                    <div className="cartItem" key={item.id}>
                        <img className="cartItemImg" src={item.url} alt="cart" />
                        <div>
                            <p className="cartItemName">{item.name}</p>
                            <p className="cartItemCost">${item.cost}</p>
                        </div>
                    </div>
                )
            })}
            <div>
                <h3>Total: $</h3>
            </div>
        </div>
    )
}

export default Cart
