import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Home = () => {

    let [movies, setmovies] = useState(null);

    useEffect(() => {

        if (localStorage.getItem("fav") == null) {
            localStorage.setItem("fav", "[]")
        }



        setTimeout(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setmovies(data);
                })
        }, 3000)
    }, [])



    return (


        <div className="home">


            {movies == null && <h1>Loading.......</h1>}

            {movies != null &&
                <MoviesList movies={movies} title="All movies" />
            }

            {movies != null &&
                <MoviesList movies={movies.filter((m) => { return m.genre.includes("action") })} title="Action Movies" />
            }

            {movies != null &&
                <MoviesList movies={movies.filter((m) => { return m.rating >= 8.5 })} title="top rated movies" />
            }

            {movies != null &&
                <MoviesList movies={movies.filter((m) => { return m.moviename.startsWith("K") })} title="Search result for K" />
            }









        </div>

    );
}
export default Home;