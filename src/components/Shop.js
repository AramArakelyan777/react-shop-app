import PRODUCTS from "../products/products"
import "../css/Shop.css"

function Shop() {
    return (
        <div className="productsContainer">
            {PRODUCTS.map(item => {
                return (
                    <div className="product">
                        <img src={item.url} alt="product" />
                        <h2>{item.name}</h2>
                        <p>Cost: ${item.cost}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop
