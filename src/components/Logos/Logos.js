import React from "react";
import logo1 from "../images/Logo.png";
import logoCSS from "../Logos/logos.module.css"


const Logos = ()=>{
    return(
        <div class={logoCSS.logoContainer}>
            <span ><img src={logo1} class={logoCSS.logo} /></span>
            <span ><img src={logo1} class={logoCSS.logo}/></span>
            <span ><img src={logo1} class={logoCSS.logo}/></span>
            <span ><img src={logo1} class={logoCSS.logo}/></span>
            <span ><img src={logo1} class={logoCSS.logo}/></span>
          
           
        </div>
    )
}
export default Logos