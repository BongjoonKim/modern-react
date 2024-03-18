import {useEffect, useState} from "react";

function Code199() {
  const [counter, setCounter] = useState(0);
  console.log("렌더링 확인")
  new AbortController();
  function handleClick() {
    setCounter(prev => prev + 1);
    

  }
  
  useEffect(() => {
    const controller = new AbortController();

  }, []);
  useEffect(() => {
    function addMouseEvent() {
      console.log("addMouseEvent", counter);
    }
    
    window.addEventListener("click", addMouseEvent)
    
    return () => {
      console.log("클린업 함수", counter);
      window.removeEventListener("click", addMouseEvent);
    }
  }, [counter]);
  
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default Code199;