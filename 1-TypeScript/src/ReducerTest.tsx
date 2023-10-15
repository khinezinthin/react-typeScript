import React, { useReducer } from 'react'

interface IntialStateType{
    count: number
}

// string twy ko key value a nay nat store pay = nat yay
enum CounterType{
    increse = "increment",
    decrese = "decrement"
}

// type yaw payload yaw khwal thet hmat chin yin  union type nat yay
type ActionType = {type: "increment", payload: number} | {type: "decrement", payload: string}

// yoe yoe use 
// interface ActionType{
//     // type: string
//     type: CounterType
//     payload: number
// }

const initialState:IntialStateType = {
    count: 0
}

const reducer = (state: IntialStateType,action: ActionType) => {
    const {type,payload} = action

    switch (type) {
        // case "increment":
        case CounterType.increse:
            return {count: state.count + payload}
            break;

        case CounterType.decrese:
            return {count: state.count - Number(payload)}
            break;
    
        default:
           return state;
    }
}
const ReducerTest = () => {
    const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='m-10'>
        <p>{state.count}</p>
        <button className='bg-green-500 p-2 mr-5' onClick={()=> dispatch({type: CounterType.increse, payload: 1})}>increase</button>
        <button className='bg-red-500 p-2' onClick={()=> dispatch({type: CounterType.decrese, payload: "1"})}>decrease</button>
    </div>
  )
}

export default ReducerTest