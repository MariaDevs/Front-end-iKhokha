import React from "react";
import logoWeb from "../images/LogoW.png";
import logoCSS from "../Logos/logos.module.css";

const Logos = () => {
  return (
    <div>
      <div class={logoCSS.row}>
        <div class={logoCSS.col}>
          <a href="/" class={logoCSS.text}>
            Logo #1
          </a>
        </div>
        <div class={logoCSS.col}>
          <a href="/">
            <img src={logoWeb} class={logoCSS.logo1} />
          </a>
        </div>
        <div class={logoCSS.col}>
          <a href="/" class={logoCSS.text}>
            Logo #1
          </a>
        </div>
        <div class={logoCSS.col}>
          <a href="/" class={logoCSS.text}>
            Logo #1
          </a>
        </div>
        <div class={logoCSS.col}>
          <a href="/" class={logoCSS.text}>
            Logo #1
          </a>
        </div>
      </div>

      <div className={logoCSS.slider}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel" 
        >
          <div class="carousel-inner" >
            <div class="carousel-item active" >
                <div className={logoCSS.sliderContainer}>
            <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol } >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText}>
            Logo #1
          </a>
        </div>
        </div>
            </div>
            <div class="carousel-item">
            <div className={logoCSS.sliderContainer}>
            <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol } >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        </div>
        

            </div>
            <div class="carousel-item">
            <div className={logoCSS.sliderContainer}>
            <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol } >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        <div class={logoCSS.sliderCol} >
          <a href="/" class={logoCSS.sliderText} >
            Logo #1
          </a>
        </div>
        </div>
        

            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Logos;
