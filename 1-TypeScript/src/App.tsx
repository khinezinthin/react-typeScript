import React, { useState } from "react";
import Child2 from "./Child2";
import { useStateContext } from "./context/StateContext";
import Child3 from "./Child3";
import ReducerTest from "./ReducerTest";

// 1
//   interface User{
//     name: string
//     email: string
//   }
//   const [count,setCount] = useState<number>(0);

//   // const [user,setUser] = useState<User | null>(null); // user?.name
//   const [user,setUser] = useState<User>({} as User);

//   const login = () =>{
//     setUser({
//       name: "khine zin thin",
//       email: "kzt@gmail.com"
//   })
// }

// 2
interface BasicType {
  id: number;
  name: string;
}
interface User extends BasicType {
  email: string;
  password: number;
}

interface Product extends BasicType {
  price: number;
}

const App = () => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "k",
    email: "k@gmail.com",
    password: 123,
  });

  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "k",
    price: 300,
  });

  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  const ChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => [
    setTitle(e.target.value),
  ];

  return (
    <div>
      {/* 1
      <div>
      <p>{count}</p>
      <button onClick={()=>setCount(prev => prev + 1)}>Click</button>

      <h1>
        user: {user.name}, 
        email: {user .email}
      </h1>
      <button onClick={login}>log in</button>
      </div> */}

      <p>{count}</p>
      <Child2 setCount={setCount} />

      <p>title: {title}</p>
      {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      <input type="text" value={title} onChange={(e) => ChangeTitle(e)} />

      <Child3 />

      <ReducerTest />
    </div>
  );
};

export default App;
