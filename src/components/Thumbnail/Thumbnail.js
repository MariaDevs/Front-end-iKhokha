import React from "react";
import img3Web from "../images/image3W.png";
import ThumbnailCSS from "../Thumbnail/thumbnail.module.css";

const Thumbnail = () => {
  return (
    <div>
      <div className={ThumbnailCSS.row1}>
        <div class={ThumbnailCSS.col}>
          <img src={img3Web} class={ThumbnailCSS.image1} />
          <p class={ThumbnailCSS.title}>Blog Title #1</p>
          <p class={ThumbnailCSS.text}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>

        <div class={ThumbnailCSS.col}>
          <img src={img3Web} class={ThumbnailCSS.image1} />
          <p class={ThumbnailCSS.title}>Blog Title #1</p>
          <p class={ThumbnailCSS.text}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>

        <div class={ThumbnailCSS.col}>
          <img src={img3Web} class={ThumbnailCSS.image1} />
          <p class={ThumbnailCSS.title}>Blog Title #1</p>
          <p class={ThumbnailCSS.text}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>

        <div class={ThumbnailCSS.col}>
          <img src={img3Web} class={ThumbnailCSS.image1} />
          <p class={ThumbnailCSS.title}>Blog Title #1</p>
          <p class={ThumbnailCSS.text}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>
      </div>

      <div className={ThumbnailCSS.row2}>
        
        <div className={ThumbnailCSS.col2}>
        <img src={img3Web} class={ThumbnailCSS.image2} />
          <p class={ThumbnailCSS.title2}>Blog Title #1</p>
          <p class={ThumbnailCSS.text2}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>
       
        <div className={ThumbnailCSS.col2}>
        <img src={img3Web} class={ThumbnailCSS.image2} />
          <p class={ThumbnailCSS.title2}>Blog Title #1</p>
          <p class={ThumbnailCSS.text2}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>
      </div>
      <div className={ThumbnailCSS.row2}>
        
        <div className={ThumbnailCSS.col2}>
        <img src={img3Web} class={ThumbnailCSS.image2} />
          <p class={ThumbnailCSS.title2}>Blog Title #1</p>
          <p class={ThumbnailCSS.text2}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>
       
        <div className={ThumbnailCSS.col2}>
        <img src={img3Web} class={ThumbnailCSS.image2} />
          <p class={ThumbnailCSS.title2}>Blog Title #1</p>
          <p class={ThumbnailCSS.text2}>
            Blog excerpt - first lines - for approx two lines
          </p>
        </div>
      </div>
     
    </div>
  );
};
export default Thumbnail;
