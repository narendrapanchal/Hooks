import React, { useCallback, useEffect,useMemo, useState } from "react";
import "./App.css";

const Child=React.memo(({handleChange, setShow})=>{
    console.log("child ran");
    return <>
    <p > {handleChange()}</p>
    <button onClick={()=>setShow(prev=>!prev)}>Change</button>
    </>
})
function HookUseCallback() {
    
    const [show,setShow]=useState(false);

  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });
  const handleChange=useCallback(()=>{
    return count.num*2;
},[count]);

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };
  const handleSubtract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

const [screenWidth,setScreenWidth]=useState(window.innerWidth);
  useEffect(() => {
    //    runs every single time
    window.addEventListener("resize",()=>{
        setScreenWidth(window.innerWidth)
    })
    console.log("First");
    return () => {
        console.log("Removed")
        // window.removeEventListener("resize");
    };
  }, [count]);
  return (
    <div className="App">
      <button onClick={handleSubtract}>-</button>
      <span>{count.num}</span>
      {show&&<span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>
      <br/>
      <span>Window Width {screenWidth}</span>
      <p>{handleChange()}</p>
      <button onClick={()=>{
        setShow((prev)=>!prev);
      }}>change</button>
      <Child handleChange={handleChange} setShow={setShow}/>
    </div>
  );
}

export default HookUseCallback;
