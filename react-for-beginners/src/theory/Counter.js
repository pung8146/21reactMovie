import {useState,useEffect} from "react";

function Counter() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeword] = useState("")
    const onClick = () => setValue((prev) => prev +1);
    const onChange = (event) => setKeword(event.target.value); 
    console.log('i run all the time');
    const iRunOnlyOnce = () => {
        console.log('i run only once.');
    }
    useEffect(iRunOnlyOnce, []);
    return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="search here..." />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
    </div>
  );
}

export default Counter;
