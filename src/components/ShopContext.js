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
        case "update-an-item":
            return {
                ...state,
                [action.payload.itemId]: action.payload.newAmount
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

    const updateAnItem = (newAmount, itemId) => {
        dispatchCartItems({ type: "update-an-item", payload: { newAmount, itemId } })
    }

    return <ShopContext.Provider value={{ cartItems, addAnItem, removeAnItem, updateAnItem }}>{children}</ShopContext.Provider>
}
