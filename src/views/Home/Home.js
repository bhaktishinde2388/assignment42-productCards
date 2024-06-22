import ProductCards from "../../components/ProductCards/ProductCards"
import Navbar from "../../components/Navbar/Navbar"
import Buttons from "../../components/Buttons/Button"
import "./../Home/Home.css"
import IndexImg from "./../Home/image/index-img.jpg"
const Home= () =>
    {
        return(
            <>
            <Navbar/>

            <img className="index-main-img" src={IndexImg}/><br></br><br></br>
                      
            </>
        );
    }
   

export default Home