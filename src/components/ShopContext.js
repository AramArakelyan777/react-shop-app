import { createContext, useReducer } from "react"
import PRODUCTS from "../products/products"

export const ShopContext = createContext(null)

const cartItemsReducer = (state, action) => {
    switch (action.type) {
        case "add-an-item":
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            }
        case "remove-an-item":
            return {
                ...state,
                [action.payload]: state[action.payload] - 1
            }
        default:
            return state
    }
}

const initialItem = {}

for (let i = 1; i <= PRODUCTS.length; i++) {
    initialItem[i] = 0
}

export const ShopContextProvider = ({ children }) => {
    const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, initialItem)

    const addAnItem = (itemId) => {
        dispatchCartItems({ type: "add-an-item", payload: itemId })
    }

    const removeAnItem = (itemId) => {
        dispatchCartItems({ type: "remove-an-item", payload: itemId })
    }
    console.log(cartItems)
    return <ShopContext.Provider value={{ cartItems, addAnItem, removeAnItem }}>{children}</ShopContext.Provider>
}
