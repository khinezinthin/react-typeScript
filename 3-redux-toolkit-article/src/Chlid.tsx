import React from 'react'
import { ItemsType } from './App'
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getProducts } from './redux/services/productsSlice';

interface FinalItemsType{
    items: ItemsType[]
}
const Chlid = ({items}: FinalItemsType) => {
    const pd = useAppSelector(state => state.product.products)
  // console.log(pd);
  const dispatch = useAppDispatch()

  return (
    <div>
        <button onClick={() => dispatch(getProducts(items))}>Add Products</button>
    </div>
  )
}

export default Chlid