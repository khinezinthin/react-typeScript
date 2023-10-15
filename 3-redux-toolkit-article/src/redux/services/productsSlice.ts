import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ItemsType } from '../../App'

interface ProductsType {
  products: ItemsType[]
}

const initialState: ProductsType = {
  products: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, {payload}: PayloadAction<ItemsType[]>) => {
      // console.log(typeof payload);
      state.products = payload
    }
  },
})

export const { getProducts } = ProductSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default ProductSlice.reducer