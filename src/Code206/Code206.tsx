import {useEffect, useState} from "react";
import Child1 from "./Child1/Child1";
import Child2 from "./Child2/Child2";
import {useRecoilState} from "recoil";
import {recoilState} from "../recoilState/recoilState";

function Code206() {
  const [all, setAll] = useRecoilState(recoilState.variable);
  
  const handleClick = (event : any) => {
    console.log("클릭", event)
    setAll((prev : any) => prev + 1);
  }
  
  useEffect(() => {
    console.log("Code206 A", all)
  }, [all]);
  
  useEffect(() => {
    console.log("Code206")
  }, []);
  
  return (
    <>
      <Child1 all={all}/>
      <Child2 all={all}/>
      <button onClick={handleClick}>
        +
      </button>
    </>
  )
}

export default Code206;