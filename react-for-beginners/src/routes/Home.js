import { useEffect, useState} from "react";
import Movie from "./components/Movie"

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
            )
        ).json();
        setMovies(json.data.movie)
        setLoading(false);
    };
    useEffect (() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                 <h2>Page Loading... </h2> 
                ) : (
            <div>
                {movies.map((movie) => (
                    <Movie key={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
                ))}
            </div>
                )}
        </div>
    ) 
}

export default Home;