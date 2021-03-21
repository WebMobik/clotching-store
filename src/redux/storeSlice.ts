import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

type product = {
    id: number,
    title: string,
    price: number,
    count: number
}
interface IInitialState {
    products: Array<product>,
    showCartItems: boolean,
    isAuth: boolean
}

const initialState: IInitialState = {
    products: [],
    showCartItems: false,
    isAuth: false
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const product = action.payload
            const findProduct = state.products.find(el => el.id === product.id)
            if (findProduct) {
                state.products.forEach(el => el.id === findProduct.id && ++el.count)
            } else {
                state.products.push({ ...product, count: 1 })
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
            }
        },
        removeCartItems: (state, action) => {
            const id = action.payload
            state.products = state.products.filter(el => el.id !== id)
        },
        removeAllCartItems: (state) => {
            state.products = []
        },
        showDropdownMenu: (state) => {
            state.showCartItems = !state.showCartItems
        },
        setAuthUser: (state) => {
            state.isAuth = !state.isAuth
        }
    }
})

export const {
    addItemToCart,
    removeCartItem,
    removeCartItems,
    removeAllCartItems,
    showDropdownMenu,
    setAuthUser
} = storeSlice.actions

export const selectIsUserAuth = (state: IInitialState) => state.isAuth
export const selectCartItems = (state: IInitialState) => state.products
export const selectShowCartItems = (state: IInitialState) => state.showCartItems
export const selectNumberProducts = (state: IInitialState) => state.products.length
export const selectAllPrice = createSelector(
    selectCartItems,
    products => products.reduce((acc, product) => acc + product.count * product.price, 0)
)

export default storeSlice.reducer
