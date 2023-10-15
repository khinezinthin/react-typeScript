import React from 'react'
import { Todo } from './Todo'

export const createTodo = () => {
    const todos = []
    for (let i = 0; i < 100; i++) {
        todos.push({
            id: i,
            name: "todo" + (i + 1),
            completed : Math.random() > 0.5
        })
      }
      return todos
}

export const filterTodo = (todos: Todo[], tabs: string) => {
    let startTime = performance.now()
    // console.log(performance.now() - startTime < 500);

    return todos.filter((todo) => {
      console.log("hello");
      if(tabs === "All"){
        return true
      }else if(tabs === "Active"){
        return !todo?.completed
      }else if(tabs === "Complete"){
        return todo?.completed
      }})
    // while(performance.now() - startTime < 500){
    //   console.log('while loop');
    // }
    // return todos.filter((todo) => {
    //   if(tabs === "All"){
    //     return true
    //   }else if(tabs === "Active"){
    //     return !todo?.completed
    //   }else if(tabs === "Complete"){
    //     return todo?.completed
    //   }
    // })
} 

const Utils = () => {
  return (
    <div>utils</div>
  )
}

export default Utils