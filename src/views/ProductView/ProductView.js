import { useParams } from "react-router-dom"
import Button from "./../../components/Buttons/Button";
import "./ProductView.css"
import {products} from "../../data";

import Navbar from "../../components/Navbar/Navbar";
import {Link} from "react-router-dom";
function ProductView ()
    {
        const {id} = useParams()

        const select = products.find((blogObject) =>{
            if (blogObject.id == id)
                {
                    return true
                }

                else{
                   return false
                }
            })

            console.log(select)

        return(
            <>
            <Navbar/>
                    
            <div  className="product-view-container" >
             <img className="product-img" src={select.posterUrl}/>
             <div className="card-body">
             <h3>{select.name}</h3>
             <p className="product-info">{select.cardInfo}</p>    <br></br><br></br><br></br>
            
            <div className="price-container">
                
             <span className="price">Price:&nbsp;{select.price.mainPrice}</span><br/><br></br>
             <Link to="/Product"><Button text="Order"/></Link>
             
             </div>
               
             <h4>{select.rating}</h4>
            </div>
        </div>

            </>
           
        )
    }
  
    export default ProductView