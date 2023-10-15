import React,{useState, useMemo} from 'react'
import MemoTest from './MemoTest'
import Todo from './components/Todo'
import Utils, { createTodo, filterTodo } from './components/utils'
import CallBack from './CallBack'

const App = () => {
  const [isDark,setDark] = useState<boolean>(false)
  const [tabs,setTabs] = useState<string>("All")

  const todos = useMemo(() => createTodo(),[tabs])
  // console.log(tabs);

  return (
    <div>
      <h1>Use CallBack</h1>
      <CallBack/>

      <h1>Use Memo</h1>
      <MemoTest/>

      <h1>Todo</h1>
      <div style={{
        display: "flex",
        gap: "10px",
      }}>
      <button onClick={()=>setTabs("All")}>All</button>
      <button onClick={()=>setTabs("Active")}>Active</button>
      <button onClick={()=>setTabs("Complete")}>Complete</button>
      <button onClick={()=>setDark(!isDark)}>Dark</button>
      </div>

      <Todo isDark={isDark} todos={todos} tabs={tabs}/>
    </div>
  )
}

export default App