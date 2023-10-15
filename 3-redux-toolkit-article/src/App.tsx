import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, incrementByAmount } from "./redux/services/counterSlice";
import Chlid from "./Chlid";
import { useGetProductsQuery } from "./redux/api/productsApi";

export interface ItemsType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const App = () => {
  // slice test
  const value = useAppSelector((state) => state.counter.value);
  // console.log(value);
  const dispatch = useAppDispatch();

  // slice api test
  const [items, setItems] = useState<ItemsType[]>([]);
  // console.log(items);

  // query test 
  const {data:pd} = useGetProductsQuery()
  console.log(pd);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const data = await api.json();
    setItems(data);
  };

  return (
    <div>
      {/* slice test  */}
      <div>
        <h1>Slice Test</h1>
        <p>{value}</p>
        <button onClick={() => dispatch(increment())}>click</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>click</button>
      </div>

      {/* slice api test  */}
      <h1>Slice Api Test</h1>
      <Chlid items={items} />
    </div>
  );
};

export default App;
