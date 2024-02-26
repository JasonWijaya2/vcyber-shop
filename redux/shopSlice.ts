import { StoreProduct, UserInfo } from "@/type"
import { createSlice } from "@reduxjs/toolkit"

interface ShopState {
    productData: StoreProduct[];
    userInfo: null | UserInfo;
}

const initialState: ShopState = {
    productData: [],
    userInfo: null,
}

export const shopSlice = createSlice ({
    name:"shop",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item: StoreProduct) => item._id === action.payload._id)

            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.productData.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.productData.find((item: StoreProduct) => item._id === action.payload._id)

            if (item) {
                item.quantity++
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.productData.find((item: StoreProduct) => item._id === action.payload._id)

            if (item?.quantity === 1) {
                item.quantity = 1
            }
            else {
                item!.quantity--
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter((item) => item._id !== action.payload)
        },
        resetCart: (state) => {
            state.productData = []
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        removeUser: (state) => {
            state.userInfo = null
        },
    }
})

export const { addToCart, deleteItem, resetCart, increaseQuantity, decreaseQuantity, addUser, removeUser } = shopSlice.actions
export default shopSlice.reducer