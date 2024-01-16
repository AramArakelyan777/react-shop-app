import PRODUCTS from "../products/products"
import "../css/Shop.css"

function Shop() {
    return (
        <div className="productsContainer">
            {PRODUCTS.map(item => {
                return (
                    <div className="product" key={item.id}>
                        <img src={item.url} alt="product" />
                        <h2>{item.name}</h2>
                        <p>Cost: ${item.cost}</p>
                        <button className="addToCart">Add To Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop
