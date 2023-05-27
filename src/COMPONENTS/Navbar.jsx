import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav>
        <div id="logo" >
           <Link to="/"> <h1 className="logo">Movies 🕷 </h1></Link>
        </div>
        <div id="search-bar">
            <input type="search" placeholder="search for movie" />
          <Link> <button>search</button></Link>
        </div>
        <div id="fav-movie">
        <Link to="/fav">Favourite Movies</Link>

        </div>
        <div id="add-movie">
            <Link to="/Add movie">Add movie</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;