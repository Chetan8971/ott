
const Fnavbar = () => {




    return (

        <nav>
            <div id="logo" >
                <h1><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></h1>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="search for Products" />
                <button>search</button>
            </div>
            <div><button id="Login">LOGIN</button></div>
            <div id="add-cart">
                <a href="Add cart">Add to Cart </a>
            </div>
        </nav>

    );
}

export default Fnavbar;