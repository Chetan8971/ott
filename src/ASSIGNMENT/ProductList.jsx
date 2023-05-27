const ProductList = ({products,title}) => {
    return ( 
        <div>

<h1>{title}</h1>


 <div className="products">
            {products.map((Product)=>{ 
                return(
                    <div className="product1">
                        <img src={Product.image} width="100px" height="50px"   alt="images"/>
                        <h1>{Product.Product_brand}</h1>
                        <h1 id="rating">{Product.Rating}</h1>
                    </div>
                )
            })}
        </div>
        </div>
     );
          } 
           export default ProductList;