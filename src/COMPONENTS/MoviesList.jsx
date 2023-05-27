import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies, title }) => {

    let [favId, setfavID] = useState([]);
    let [altered, setaltered] = useState(0);

    useEffect(() => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        setfavID(fav.map((m) => { return m.id }))
    }, [altered])




    let handleAddofFav = (movie) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav", fav);
        setaltered(altered + 1);
        // alert("movie added to favourite list")
    }

    let handleremovetofav = (id) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        let fav1 = fav.filter((m) => { return m.id !== id })
        localStorage.setItem("fav", JSON.stringify(fav1));
        setaltered(altered + 1);

        // alert("remove movie from favourite list")
    }


    return (
        <div>

            <h1 className="title">{title}</h1>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="movie">
                            {favId.includes(movie.id) ?
                                <button className="add-btn" onClick={ ()=>{handleremovetofav(movie.id)} }> <i class='bx bxs-heart' ></i></button> 
                                :
                                <button className="remove-button" onClick={ ()=>{handleAddofFav(movie)} }><i class='bx bx-heart' ></i></button>}
                            <Link to={`/moviedetails/${movie.id}`}>
                                <img src={movie.poster} width="200px" height="150px" />
                                <p className="id">{movie.id}</p>
                                <h1>{movie.moviename}</h1>
                                <h1 id="genre">{movie.genre}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MoviesList;