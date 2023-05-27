import Home from "./COMPONENTS/Home";
import Navbar from "./COMPONENTS/Navbar";
import Addmovie from "./COMPONENTS/Addmovie";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./COMPONENTS/MovieDetails";
import Favourites from "./COMPONENTS/Favourites";



// -------  product page---------------------------------------
// import Fnavbar from "./ASSIGNMENT/Fnavbar";
// import Product from "./ASSIGNMENT/Product";
// import './STYLES/Product.css'
// import './index.css'




function App() {



  return (

    <div className="App">


      {/* ---------------------OTT---------------------------------------- */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Add movie"   element={<Addmovie/>}></Route>
          <Route path="/moviedetails/:id" element={<MovieDetails/>}></Route>
          <Route path='/fav' element={<Favourites/>  }/>
        </Routes>
      </BrowserRouter>



      {/* ---------------------PRODUCT APP--------------------------------------- */}
{/* 
      <Fnavbar />
      <Product /> */}


    </div>
  );
}

export default App;
