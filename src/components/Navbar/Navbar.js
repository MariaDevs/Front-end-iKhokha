import React, {useState} from "react";
import navLogoWeb from "../images/logoNavW.png";
import "../Navbar/navBar.css";
import closeNav from "../images/cross.png";
import openNav from "../images/reorder.png";


const Navbar = ()=>{
 const [showLinks, setShowLinks] = useState(true);
    return(
      <div class= "nav">
        <div class="navContainer">
        <button  onClick={()=> setShowLinks (!showLinks)}>
          <span><img src={openNav} className= "navBtn" style={{background:"transparent", border:"no-border"}}/></span>         
      </button>
      <a class="navbar-brand" id="mobile" href="#"><img src={navLogoWeb} class="navLogo"/></a>

      <div className= "links" id={showLinks ? "hidden" : ""}>
    
      <a class= "navItem" style={{marginRight:52}} href="/">Home</a>
      <a class= "navItem"  href="/">Products</a>
      <a class="navbar-brand" id="web" href="#"><img src={navLogoWeb} class="navLogo"/></a>
      <a class= "navItem"  href="/">Blog</a>
      <a class= "navItem" id="margin1" href="/">Contact</a>
      </div>
      </div>
    </div>
  
    )
}
export default Navbar