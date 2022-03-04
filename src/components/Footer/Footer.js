import React from "react";
import footLogo from "../images/logoFootW.png";
import footerCSS from "../Footer/footer.module.css";

const Footer = ()=>{
    return(
        <div className={"footer"}>
       <div className={footerCSS.cont}>
        <span><img src={footLogo} className={footerCSS.logo}/></span>
        <span className={footerCSS.text}> All rights reserved &copy; </span>
       </div>

   </div>

    )
}
export default Footer