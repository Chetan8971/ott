import { useRef } from "react";
import {useNavigate} from 'react-router-dom'


const Addmovie = () => {

    let navigate = useNavigate()

    let moviename = useRef();
    let hero = useRef(); 
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();


    
    let handleAddNewMovie = (e)=>{
        e.preventDefault()
        // create new movie object
        let newMovie = {
            moviename : moviename.current.value,
            hero : hero.current.value,
            heroine : heroine.current.value,
            director : director.current.value,
            languages:[],
            genre:  genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value
        };
        let options = document.getElementsByName("lang");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push( options[i].value )
            }  
        }

        // send the movie obj to the database
        fetch("http://localhost:4000/movies" , 
                                                {
                                                    method : "POST",
                                                    headers : {"Content-Type": "application/json"},
                                                    body : JSON.stringify(newMovie)
                                                })
        .then(()=>{
            alert("New movie added to database");
            navigate("/");
        })
    }


    return (<div className="Add-movie">

        <h1 id="title">ADD MOVIES</h1>
<form onSubmit={handleAddNewMovie} className="form">
<input type="text" placeholder="movie" required id="moviename" ref={moviename}/>
<input type="text" placeholder="hero" required id="hero"  ref={hero}/>
<input type="text" placeholder="heroine" required id="heroine"   ref={heroine}/>
<input type="text" placeholder="director" required id="director"  ref={director}/>
<fieldset>
<legend id="languages">Select Languages</legend>
<input type="checkbox" id="kannada" value="kannada" name="lang" /><label>kannada</label>
<input type="checkbox" id="tamil" value="tamil" name="lang" /><label>tamil</label>
<input type="checkbox" id="telugu" value="telugu" name="lang" /><label>telugu</label>
<input type="checkbox" id="malayalam" value="malayalam" name="lang" /><label>malayalam</label>
<input type="checkbox" id="hindi" value="hindi" name="lang"  /><label>hindi</label>

</fieldset>

<input type="text" placeholder="genre" required id="genre" ref={genre}/>
<input type="url" placeholder="poster" required id="poster"  ref={poster}/>
<input type="url" placeholder="trailer" required id="trailer"  ref={trailer}/>
<input type="number" min="1950"  max="2024" placeholder="release" required id="release" ref={release}/>
<input type="number" placeholder="rating" required id="rating" max={10}  min={1} step="0.1" ref={rating}/>
<textarea name="synopsis" id="synopsis" cols="100" rows="10"   ref={synopsis}>Type Synopsis  </textarea>
       
{/* <input type="Submit"/> */}
       <button>Submit</button> 
    
       

        </form>


    </div>);
}

export default Addmovie;