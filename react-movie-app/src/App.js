import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick=()=>setValue((prev)=>prev+1);
  const onChange = (event) =>{
    setKeyword(event.target.value);
  }
  const onClick2=()=>setShowing(prev => !prev);

  function Hello(){
    useEffect(()=>{
     console.log("created!");
     return () => console.log("destroyed!");
    },[])
    return <h2>Hello</h2>;
  }
  useEffect(()=>{
    console.log("I run only once");
  }, []);
  useEffect(()=>{
    if (keyword !=="" && keyword.length>5 ){
      console.log("I run when 'keyword' changes.");  
    }
  },[keyword])
  useEffect(()=>{
      console.log("I run when 'counter' changes.");  
  },[counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      {showing ? <Hello/> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
