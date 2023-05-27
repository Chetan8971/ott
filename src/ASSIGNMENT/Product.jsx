import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Product = () => {

    let [products, setproducts] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/Products")
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setproducts(data);
                })
        }, 3000)
    }, [])




    return (
        
        

        <div className="product">

        {products == null && <h1>..Loading........</h1>}

            
            {products != null &&
                <ProductList products={products} title="All products" />
            }
              {products != null &&
                <ProductList products={products} title="All products" />
            }




        </div>
     );
}

export default Product;