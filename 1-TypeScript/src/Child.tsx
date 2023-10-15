import React from 'react'

//  1 
// interface Name{
//     name: string
// } 
// {name}: Name / u nee

//  2
// interface Age{
//   age: number
// } 
//{age}: Age

// 3
// interface Fruit{
//   fruits: string[]
// } 
// {fruits}: Fruits

// 4 array of obj ka 2 khr lote pay ya 
// interface User{
//   id: number;
//   email: string;
// }

// 5
// interface Final{
//   users: Users[]
// } 
// {users}: Final

// 6
interface Test{
  test: (num1: number, num2: number) => void
}

// 7
// interface Final<T>{
//   names: T[]
// }

// const Child = <T extends {}>({names}: Final<T> ) => {

const Child = ({test}: Test ) => {
  console.log(test(1,2));
  return (
    <div>
        {/* <p>{name}</p> */}
        {/* <p>{age}</p> */}
  
    </div>
  )
}

export default Child