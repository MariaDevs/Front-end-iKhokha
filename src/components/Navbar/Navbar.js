import React from "react";
import navLogo from "../images/logoNav.png";
import navbarCSS from "../Navbar/navbar.module.css";


const Navbar = ()=>{
    return(
      <div class={navbarCSS.nav}>
        <div class={navbarCSS.links}>
        <a class= {navbarCSS.item}style={{marginRight:52}} href="/">Home</a>
        <a class= {navbarCSS.item} href="/">Products</a>
        <a class="navbar-brand" href="#"><img src={navLogo} class={navbarCSS.logo}/></a>
        <a class= {navbarCSS.item} href="/">Blog</a>
        <a class= {navbarCSS.item}style={{marginLeft:51}} href="/">Contact</a>
        </div>



      </div>
    )
}
export default Navbar