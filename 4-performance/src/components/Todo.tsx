import React,{useMemo, useEffect, useState} from 'react'
import { filterTodo } from './utils';

export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

interface PropType{
    isDark: boolean
    todos: Todo[]
    tabs: string
}

const Todo = ({isDark, todos, tabs}: PropType) => {
  // console.log(todos);
  // const todoFilter = filterTodo(todos,tabs)
  const todoFilter = useMemo(() => filterTodo(todos,tabs),[todos,tabs])
  
  return (   
    <div style={{
        backgroundColor: `${isDark === true ? "black" : "white"}`
    }}>
        {todoFilter?.map(todo => {
          return(
            <div key={todo?.id}>
              <p>{todo?.completed ? <s>{todo?.name}</s> : <p>{todo?.name}</p>}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Todo