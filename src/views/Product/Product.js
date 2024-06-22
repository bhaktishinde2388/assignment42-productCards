import Navbar from "../../components/Navbar/Navbar"
import ProductCards from "../../components/ProductCards/ProductCards"

import {products} from "../../data";
import { blog } from "../../data";
import ProductView from "./../../views/ProductView/ProductView"
import "./Product.css"

const Product= () =>
    {
return(
    <>

    <Navbar/>
    <div className="product-container">
    {
        products.map((blogObject, i) => {
          const {
            id,
            name,
            posterUrl,
            rating,
            price,
            // mainPrice,
            // oldPrice,
            cardInfo
          } = blogObject

          return(
           <ProductCards
           id={id}
           key={i}
           name={name}
           posterUrl={posterUrl}
           rating={rating}
           price={price}
        //    mainPrice={mainPrice}
        //    oldPrice={oldPrice}
           cardInfo={cardInfo}
          
           />
          )
        }
    
    )
    }
    </div>
 
    </>
)
}

export default Product