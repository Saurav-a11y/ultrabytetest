import "./styles.scss";

import React from "react";

export const NewsItem = ({ data, description, image }) => {
  return (
    <div className="item">
      <img alt="item" src={image} className="img-fluid w-100" />
      <div>
        <p> {description} </p>
      </div>
    </div>
  );
};
