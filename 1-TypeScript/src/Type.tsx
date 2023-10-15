import React from 'react'
import Child from "./Child";

const Type = () => {
    const name: string = "khine zin thin";
  const age: number = 20;
  const isCheck: boolean = true;

  // obj {} nat pay htr yin nout ka nay kyite tr htet htae lox ya tl/ obj htl ka type twy thu br thr thet hmat pay tl
  // const obj:{} = {id:1,email:"aa@gmail.com",new:"htet htae tr"};

  // obj htl ka type ll ko br tr pyn thet mat ml so yin interface or type use Name ko a gyi nat yay tl
  interface User {
    id: number;
    email: string;
    new?: string; //new so tae kg htae chin ll htae ml ma htae chin ma htae buu
  }
  const obj: User = {
    id: 1,
    email: "aa@gmail.com",
    // new ko ma htae ll error ma tat tot buu ? kyount
    // new:"htet htae tr"
  };

  // array data type so [] but error pya tl array htl ka data twy yae type ko string[] ae lo htae pay
  const fruits: string[] = ["apple", "mango"]; // array of string data type
  const num: number[] = [1, 2, 3]; // array of number data type

  // array of obj data type
  // obj htl kyite tr htet htae lox ya
  // const users: {}[] = [
  //   {
  //     id:1,
  //     email:"aa@gmail.com",
  //   },
  //   {
  //     id:2,
  //     email:"aa@gmail.com",
  //   },
  // ]

  // obj htl kyite tr htet htae lox ma ya
  const users: User[] = [
    {
      id: 1,
      email: "aa@gmail.com",
    },
    {
      id: 2,
      email: "aa@gmail.com",
    },
  ];

  const test = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  test(1, 2);

  return (
    <div>
      {/* <Child name={name}/> 1  */}
      {/* <Child age={age}/> 2  */}
      {/* <Child fruits={fruits} /> 3 */}
      {/* <Child users={users} /> 4 */}
      <Child test={test} />

    </div>
  )
}

export default Type