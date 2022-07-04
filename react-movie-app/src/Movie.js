import PropTypes from "prop-types"

function Movie({coverImg,title,summary,genres}){
    const [loading, setLoading] = useState(true);
    const [movies , setMovies] = useState([]);
    const getMoives = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
                
        setMovies(json.data.movies);
        setLoading(false);
    return (
    <div>                
        <img src={coverImg} alt={title}></img>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => ( 
            <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
    }
}

Movie.PropTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;