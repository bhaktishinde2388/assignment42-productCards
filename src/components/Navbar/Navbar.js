import "./Navbar.css"
import SearchIcon from "./‭icons/search-icon (2).png"

import {Limk, Link} from "react-router-dom";
function Navbar({theme}) {

  return (
    <div className="navbar-container">
     
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/Product" className="navbar-link">Products</Link>
      
       
       
    </div>
  )
}
export default Navbar