import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemsType } from '../../App'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query< ItemsType[] ,void>({
      query: () => `/products`,
    }),
  }),
})

export const { useGetProductsQuery } = productApi