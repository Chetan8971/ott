import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";




const RelatedMovies = ({genre}) => {


    let [Movies, setMovies] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4000/movies/")
            .then((res) => { return res.json() })
            .then((data) => { setMovies(data) })

    }, [])

    return ( 

    <div className="RelatedMovies">
            <h1>{genre}</h1>

            {Movies &&
                <MoviesList
                    movies={Movies.filter((m) => { return m.genre.includes(genre) })}


                    title="Related Movies" />}


        </div>
     );
}
 
export default RelatedMovies;