import { useCallback, useState } from "react";
import Home from "./components/Home";


function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("Good")
  // const getAdjective=()=>{
  //   return "other" + count
  // }

  const getAdjective = useCallback(()=>{
    return "other" + count
  },[])
  return (
<>

<Home adjective={"good"} getAdjective={getAdjective} />
 <div>
   <button onClick={()=> setCount(count+1) } >Click me  : {count}</button>
 </div>
</>
  );
}

export default App;
