import React from "react";
import Navbar from "../Navbar/Navbar";
import Heroes from "../Heroes/Heroes";
import ReadMore from "../ReadmoreBtn/ReadMore";
import Logos from "../Logos/Logos";
import Footer from "../Footer/Footer";
import Thumbnail from "../Thumbnail/Thumbnail";

 

const Home = ()=>{
    return(
        <div class="container" style={{maxWidth:1440,margin:0,padding:0}}>
            <Navbar/>
      
                   
            <Heroes/>
            <Logos/>
            <Thumbnail/>
            <ReadMore/>
        
            <Footer/>
      
        </div>
    )
}
export default Home;