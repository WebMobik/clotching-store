import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false
}

type typeInitialState = typeof initialState

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        checkAuth: state => {
            state.isAuth = true
        }
    }
})

export const { checkAuth } = storeSlice.actions

export default storeSlice.reducer
