import React from 'react'
import ReducerTest from './ReducerTest'
import { useStateContext } from './context/StateContext'

const App = () => {
  const {state} = useStateContext()
  console.log(state);
  return (
    <div>
      <ReducerTest/>
    </div>
  )
}

export default App