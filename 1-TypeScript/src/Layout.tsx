import React from 'react'

interface ChildrenType{
    children: React.ReactNode
}

const Layout = ({children}: ChildrenType) => {
    // a hman ka d lo myo 
    // (props:React.ReactNode)
    // {props.children}
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout