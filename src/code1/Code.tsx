import {memo, useEffect, useState} from "react";

interface Props {
  counter : number;
}

const Component = memo((props : Props) => {
  useEffect(() => {
    console.log("Component has been rendered!");
  })
  return (
    <h1>{props.counter}</h1>
  )
});

interface DeeperProps {
  counter : {
    counter : number;
  }
}

const DeepterComponent = (props: any) => {
  useEffect(() => {
    console.log("DeepterComponent has been rendered");
  })
  
  return (
    <h1>{props.counter}</h1>
  )
}
function Code(props : any) {
  const [_, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(prev => prev + 1);
  }
  return (
    <>
      <Component counter={100} />
      <DeepterComponent counter={100} />
      <button onClick={handleClick}>+
      </button>
    </>
  )
}

export default Code;