import React from "react";

import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="layout container-fluid px-0">
      <div className="container">
        <Header />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
