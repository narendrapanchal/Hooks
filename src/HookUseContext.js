import { useContext, useEffect, useState } from "react";
import "./App.css";
import { HookDemo } from "./Context";

function HookUseContext() {
    const {count, setCount}=useContext(HookDemo)
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
//   useEffect(() => {
//     //    run only once single time
//     console.log("I ran");
//     return () => {
//       console.log("unmount empty dependency");
//     };
//   }, []);
//   useEffect(() => {
//     //    runs every single time
//     console.log("I Emty dependency");
//     return () => {
//       console.log("unmount without dependency");
//     };
//   });
  return (
    <div className="App">
      <button onClick={handleSubtract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <br/>
      <span>Window Width {screenWidth}</span>
    </div>
  );
}

export default HookUseContext;
