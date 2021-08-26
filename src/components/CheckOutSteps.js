import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
const CheckOutSteps = ({ steps1, steps2, steps3, steps4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {steps1 ? (
          <LinkContainer to="/login">
            <Nav.Link>SignIn</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>SignIn</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {steps2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {steps3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {steps4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled> Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckOutSteps;