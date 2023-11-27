import "./styles.scss";

import React from "react";

import { Col, Row } from "reactstrap";

import { ButtonComponent } from "../Button/Button";

export const MidBanner = () => {
  return (
    <div className="mid-banner py-5 mt-4">
      <div className="container">
        <Row className="align-items-center">
          <Col md={10}>
            <div className="details">
              <h4>Subscribe to our page </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </Col>
          <Col md={2}>
            <ButtonComponent
              btnTitle={"Login"}
              classNames={`secondary w-100`}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
