import React from "react";

import { Col, Form, Input, Label, Row } from "reactstrap";

import { ButtonComponent } from "../Button/Button";

export const Contact = () => {
  return (
    <div className="contact-us  mt-4">
      <div className="container">
        <Row>
          <Col md={5}>
            <h4> Get In Touch </h4>
            <p>Contact us to get in touch with our experts.</p>
            <div className="addressDetails">
              <Form>
                <div className="d-flex align-items-center mb-4">
                  <Label for="name" className="me-3 flex-grow-1 w-25">
                    Name:
                  </Label>
                  <Input type="text" id="name" />
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Label for="email" className="me-3 w-25">
                    Email:
                  </Label>
                  <Input type="text" id="email" />
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Label for="message" className="me-3 w-25">
                    Message:
                  </Label>
                  <Input type="textarea" id="message" />
                </div>
                <ButtonComponent
                  btnTitle={"Send"}
                  classNames={`primary w-100`}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
