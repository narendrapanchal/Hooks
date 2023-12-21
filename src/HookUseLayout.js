import React, { useLayoutEffect } from 'react'

function HookUseLayout() {
    useLayoutEffect(()=>{
        console.log("Hello")
    },[])
  return (
    <div>Hello
      
    </div>
  )
}

export default HookUseLayout
