import {useState} from "react";
import {useRecoilState} from "recoil";
import {recoilState} from "../recoilState/recoilState";

export default function Global(props : any) {
  
  const [all, setAll] = useRecoilState(recoilState.variable);
  
  return (
    <div>
      <a href="http://localhost:3000/199">
        199
      </a>
      <a href="http://localhost:3000/206">
        206
      </a>
      <button onClick={() => {
        setAll((prev : any) => prev + 1);
      }}>
        all
      </button>
      {props.children}
    </div>
  )
}