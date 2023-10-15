import React from 'react'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useInput from './hooks/useInput'
import useFetch from './hooks/useFetch'
import useForm from './hooks/useForm'

const App = () => {
  const {count, increase, decrease} = useCounter(0)
  const {toggle, changeToggle} = useToggle(true)

  const {input, changeInputHandler} = useInput({name: "", password: ""})

  const {items, loading, error} = useFetch(`https://dummyjson.com/products/1`)
  const {items:item2} = useFetch(`https://dummyjson.com/products/2`)

  if(loading){
    return <div>loading ....</div>
  }
  console.log(items);
  console.log("2",item2);

   const loginHandler = () => {
      console.log(formState);
  };
  
  const {formState, inputChangeHandler, submitHandler} = useForm({email: "", password: ""},loginHandler)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>

      <h1>{toggle ? "true" : "false"}</h1>
      <button onClick={changeToggle}>toggle</button>

      <h1>{input.name}</h1>
      <input type="text" name="name" value={input.name} onChange={changeInputHandler} placeholder='name' /><br />
      <h1>{input.password}</h1>
      <input type="text" name="password" value={input.password} onChange={changeInputHandler} placeholder='password' /><br />

      <form onSubmit={submitHandler}>
        <input type="text" placeholder='email' onChange={inputChangeHandler} name='email' value={formState.email} />
        <input type="password" placeholder='password' onChange={inputChangeHandler} name='password' value={formState.password}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App