import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CartCard from "./CartCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ProductContext } from "./App";

function CartComponent() {
  const { item } = useContext(ProductContext);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h5 className="mt-2">
          <Link to="/" className="links">
            <i className="fa-solid fa-arrow-left"></i> Continue Shopping
          </Link>
        </h5>
        <div className="row mt-3 gap-5 justify-content-center">
          {/* Items */}
          <div className="col-lg-8 cart-items">
            <h3 className="mt-2 display-1 fs-3">My Cart</h3>
            <div className="cart-items-container">
              <Scrollbars>
                <div className="container mb-2">
                  <div className="row mt-1 p-2 justify-content-center gap-2">
                    {item.map((currentItem) => {
                      return <CartCard key={currentItem.id} {...currentItem} />;
                    })}
                  </div>
                </div>
              </Scrollbars>
              <div className="d-flex">
                <p className="mt-3">Your cart have {5} items.</p>
                <p className="mt-1 ms-auto">
                  Cart value: <span className="fs-3"> $500</span>
                </p>
              </div>
            </div>
          </div>

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

              <Form.Group className="col-sm-12 text-center ">
                <Button variant="primary" type="submit">
                  Checkout
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartComponent;
