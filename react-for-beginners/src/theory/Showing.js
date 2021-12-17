import {useState, useEffect} from "react";

function Hello () {
    function byFn() {
        console.log("Bye :(");
    }
    function hiFn() {
        console.log("Hi :)")
        return byFn;
    }
    useEffect(hiFn,[])
    return <h1>Hello</h1>
}

function Showing () {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev); 
    return (
        <div>
            {showing ? <Hello /> : null }
            <button onClick={onClick}>{showing ? "Hide" : "show" }</button>
        </div>
    );
}

export default Showing;