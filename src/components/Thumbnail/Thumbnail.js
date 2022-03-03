import React from "react";
import img3 from "../images/image3.png";
import ThumbnailCSS from "../Thumbnail/thumbnail.module.css";

const Thumbnail = () => {
  return (
    <div class={"row col-12"}>
      <div class={"col-md-3 col-6" + ThumbnailCSS.container}>
        <img src={img3} class={ThumbnailCSS.image} />
        <p class="fw-bold">Blog Title #1</p>
        <p>Blog excerpt - first lines - for approx two lines</p>
      </div>

      <div
        class={"col-md-3 col-6"}
        style={{ padding: 0,marginRight: 20 }}
      >
        <div class={ThumbnailCSS.container}>
          <img src={img3} class={ThumbnailCSS.image} />
          <p class="fw-bold">Blog Title #1</p>
          <p>Blog excerpt - first lines - for approx two lines</p>
        </div>
      </div>

      <div
        class={"col-md-3 col-6"}
        style={{ padding: 0, marginRight: 20 }}
      >
        <div class={ThumbnailCSS.container}>
          <img src={img3} class={ThumbnailCSS.image} />
          <p class="fw-bold">Blog Title #1</p>
          <p>Blog excerpt - first lines - for approx two lines</p>
        </div>
      </div>

      <div
        class={"col-md-3 col-6"}
        style={{ padding: 0,  marginRight: 20 }}
      >
        <div class={ThumbnailCSS.container}>
          <img src={img3} class={ThumbnailCSS.image} />
          <p class="fw-bold">Blog Title #1</p>
          <p>Blog excerpt - first lines - for approx two lines</p>
        </div>
      </div>
    </div>
  );
};
export default Thumbnail;
