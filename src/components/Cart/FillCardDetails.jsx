import React from "react";
import Form from "react-bootstrap/Form";

function FillCardDetails() {
  return (
    <>
      {/* Checkout */}
      <div className="col-lg-3 h-100 checkout-dets mb-4">
        <Form className="row p-3">
          <Form.Group className="col-sm-12 mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Card Number " />
          </Form.Group>

          <Form.Group className="col-sm-6 mb-3">
            <Form.Label>Expiry date</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Form.Group>

          <Form.Group className="col-sm-6 mb-3">
            <Form.Label>CVV Code</Form.Label>
            <Form.Control type="password" placeholder="CVV" />
          </Form.Group>

          <Form.Group className="col-sm-12 mb-3">
            <Form.Label>Name on card</Form.Label>
            <Form.Control type="password" placeholder="Enter Name" />
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default FillCardDetails;
