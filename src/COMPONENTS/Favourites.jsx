import { useEffect, useState } from "react"
import MoviesList from "./MoviesList";

const Favourites=()=>{
    let [FavouriteMovies,setFav]=useState(null);

    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))
    },[])

    return(
        <div>
            {FavouriteMovies&&
            <MoviesList movies={FavouriteMovies} title="Favourite Movies"/>}
        </div>
    )
}
export default Favourites;
