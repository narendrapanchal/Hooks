import React, { createContext, useState } from 'react'
export const HookDemo=createContext();
function Context({children}) {
    const [count, setCount]=useState({
        num: 1,
        id: "abcd",
      })
  return (
    <HookDemo.Provider value={{setCount,count}}>{children}</HookDemo.Provider>  )
}

export default Context
