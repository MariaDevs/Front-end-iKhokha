import React from "react";
import footLogo from "../images/logoFoot.png";
import footerCSS from "../Footer/footer.module.css";

const Footer = ()=>{
    return(
        <div class={"footer"}>
       <div class={footerCSS.cont}>
        <span><img src={footLogo} class={footerCSS.logo}/></span>
        <span class={footerCSS.text}> All rights reserved &copy; </span>
       </div>

   </div>

    )
}
export default Footer