import { createSlice } from '@reduxjs/toolkit'

type product = {
    id: number,
    title: string,
    price: number,
    count: number
}
interface IInitialState {
    products: Array<product>,
    showCartItems: boolean,
    numberProducts: number,
    allPrice: number
}

const initialState: IInitialState = {
    products: [],
    showCartItems: false,
    numberProducts: 0,
    allPrice: 0,
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const product = action.payload
            const findProduct = state.products.find(el => el.id === product.id)
            if (findProduct) {
                const updateProduct = { ...findProduct, count: ++findProduct.count }
                const changeProducts = state.products.filter(el => el.id !== product.id)
                state.products = [ ...changeProducts, updateProduct ]
            } else {
                state.products.push({ ...product, count: 1 })
                state.allPrice += product.price
                ++state.numberProducts
            }
        },
        removeCartItem: (state: IInitialState, action) => {
            const productId = action.payload
            const products = state.products
            let { count, id }: any = products.find(el => el.id === productId)
            if (count > 1) {
                state.products.forEach(el => el.id === id && --el.count)
            } else {
                state.products = products.filter(el => el.id !== productId)
                --state.numberProducts
            }
        },
        removeAllCartItems: (state, action) => {
            state.products = []
            state.numberProducts = 0
        },
        showDropdownMenu: (state) => {
            state.showCartItems = !state.showCartItems
        }
    }
})

export const {
    addItemToCart,
    removeCartItem,
    removeAllCartItems,
    showDropdownMenu
} = storeSlice.actions

export const selectNumberProducts = (state: IInitialState) => state.numberProducts
export const selectShowCartItems = (state: IInitialState) => state.showCartItems
export const selectCartItem = (state: IInitialState) => state.products

export default storeSlice.reducer
