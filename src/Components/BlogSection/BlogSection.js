import React from "react";

import { Col, Row } from "reactstrap";

import { blogData } from "../blogData";
import { NewsItem } from "../NewsItem/NewsItem";

export const BlogSection = () => {
  return (
    <div className="blog-section mt-4">
      <div className="container-fluid px-0">
        <h2 className="text-center">Latest Blog</h2>

        <div className="container mt-4">
          <Row>
            {blogData.map((blog) => {
              return (
                <Col md={4} key={blog.id}>
                  <NewsItem
                    description={blog.description}
                    date={blog.date}
                    image={blog.image}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};
