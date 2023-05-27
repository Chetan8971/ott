import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedMovies from "./RelatedMovies";


const MovieDetails = () => {

    let { id } = useParams();
    let navigate=useNavigate();
    let [movie, setmovie] = useState(null);
    let [error, setError] = useState(null);
    let [pending, setpending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/movies/" + id)
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setmovie(data);
                    console.log(data);
                } )
                .catch((error)=>{
                    setError("404 network issue !!!! plz try again later");
                    setpending(false);
                })
                
        }, 3000)
    }, [id])

    let deleteMovie=()=>{
        fetch("http://localhost:4000/movies/" + id,{method: "DELETE"})
        .then(()=>navigate("/"))
        prompt("Are us sure to delete movie")
    }

    return (
        <div className="detailspage">
            
            <h1 className="header">MovieDetails Component</h1>

            {pending==true  &&  movie==null && <h1>Loading..........</h1>}
            {error && <h1>{error}</h1>}
            {movie && <div>
                <img className="poster" src={movie.poster} alt=" " />
                <h1>{movie.moviename}</h1>
                <h1>{movie.hero}</h1>
                <h1>{movie.heroine}</h1>
                <h1>{movie.director}</h1>
                <h1>{movie.languages.join(" , ")}</h1>
                <iframe width="560" height="315" src={movie.trailer} title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
                  <button onClick={deleteMovie} >Delete</button>

                </div>
            }
                                              {movie && <RelatedMovies genre={movie.genre}/>}

            </div>
    );
}


            export default MovieDetails;