import "./styles.scss";

import React from "react";

import bannerImg from "../../assets/image/pageBg.jpg";

export const BannerSection = () => {
  return (
    <div className="banner-section position-relative">
      <img
        alt="banner-img"
        src={bannerImg}
        className="img-fluid w-100 banner-img"
      />
      <div className="banner-overlay ">
        <div className="container h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="banner-title">
              <h1 className="heading text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
