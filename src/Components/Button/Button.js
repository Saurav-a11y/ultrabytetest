import "./styles.scss";

import React from "react";

import { Button } from "reactstrap";

export const ButtonComponent = ({ btnTitle, classNames }) => {
  return (
    <Button className={`button-component ${classNames} px-4 py-3`}>
      {" "}
      {btnTitle}{" "}
    </Button>
  );
};
