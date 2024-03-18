import {useEffect, useState} from "react";

export default function Child1(props : any) {
  // const [b, setB] = useState(1);
  const {all} = props;
  
  useEffect(() => {
    console.log("a추가", all)
  }, [all]);
  
  useEffect(() => {
    console.log("Child1")
  }, []);
  return (
    <div>
      Child1
    </div>
  )
}