import React, { useRef } from 'react'
import Counter from './comopnents/Counter'
function HookUseImperativeHandle() {
  const ref=useRef();
  return (
    <div className='App'>
       <button onClick={()=>ref.current.handleSubtract()}>-</button>
      <Counter ref={ref}/>
      <button onClick={()=>ref.current.handleAdd()}>+</button>
    </div>
  )
}

export default HookUseImperativeHandle
