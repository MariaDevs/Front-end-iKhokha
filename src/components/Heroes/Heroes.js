import React from "react";
import img1Web from "../images/image1W.png";
import img2Web from "../images/image2W.png";
import heroesCSS from "../Heroes/heroes.module.css";

const Heroes = () => {
  return (
    <div class="row align-item-center" style={{ margin: 0 }}>
      <div class="col-lg-6">
        <div class={heroesCSS.title1}>
          <p>Start new... Today!</p>
        </div>
        <div class={heroesCSS.text1}>
          <p>
            Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
          </p>
        </div>
      </div>

      <div class="col-lg-6" style={{ padding: 0 }}>
        <div>
          <img src={img1Web} class={heroesCSS.image1W} />
        </div>
      </div>

      <div class={heroesCSS.title2} >
        <p>Lorem ipsum something</p>
      </div>

      <div class="row flex-row-reverse ">
        <div class="col-lg-6">
          <div className={heroesCSS.text3Container}>
            <p class={heroesCSS.title3}>New Product, new Story</p>
            <p class={heroesCSS.text3}>
              Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
              ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
              facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
              tempor, sed ornare augue aliquam. Donec imperdiet nulla ut
              placerat molestie. In hendrerit blandit ante facilisis ultrices.
              Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc
              rhoncus.
            </p>
          </div>
        </div>
        <div class={"col-lg-6"}>
          <div className={heroesCSS.image2}>
            <img src={img2Web} class={heroesCSS.image2W} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Heroes;
