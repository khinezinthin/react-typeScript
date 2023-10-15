import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './services/counterSlice'
import productsSlice from './services/productsSlice'
import { productApi } from './api/productsApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productsSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch