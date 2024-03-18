import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {recoilState} from "../../recoilState/recoilState";

export default function Child2(props : any) {
  
  const [all, setAll] = useRecoilState(recoilState.variable);
  
  
  useEffect(() => {
    console.log("Child2")
  }, []);
  
  useEffect(() => {
    console.log("chiild2 all", all)
  }, [all])
  return (
    <div>
      Child2
    </div>
  )
}