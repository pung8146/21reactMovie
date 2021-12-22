import { useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
        )
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, []);
    return (
        <div>
            <h1>This Movie App</h1>
            {loading ? <h2>Page Loading... </h2>: null}
        </div>
    )
}

export default App;