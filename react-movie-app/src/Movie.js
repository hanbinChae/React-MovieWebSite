import { useState,useEffect } from "react";

function Movie(){
    const [loading, setLoading] = useState(true);
    const [movies , setMovies] = useState([]);
    const getMoives = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
                
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(()=>{
        getMoives()
    },[]);

{/* main */}
    return (
        <div>
            {loading ? (<h1>Loading...</h1>) 
                : 
            (<div>
                {movies.map(movie => 
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map(g => <li key={g}>{g}</li>)}
                    </ul>
                </div>)}
            </div>)}      
        </div>
    )}

export default Movie;