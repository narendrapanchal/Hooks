import { useEffect, useRef, useState } from "react";
import "./App.css";

function HookUseRef() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const renderRef=useRef(0);
  useEffect(()=>{
    renderRef.current=1;
  })
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
      <span ref={renderRef} onClick={()=>{
        renderRef.current+=1;
        console.log(renderRef.current)
      }} >{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <br/>
      <span>Window Width {screenWidth} {renderRef.current}</span>
    </div>
  );
}

export default HookUseRef;
