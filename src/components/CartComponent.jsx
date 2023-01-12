import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import CartCard from "./CartCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ProductContext } from "./App";
import FillCardDetails from "./FillCardDetails";
import Button from "react-bootstrap/esm/Button";

function CartComponent() {
  const { item, totalItem, totalAmount, clearCart } =
    useContext(ProductContext);

  if (item.length === 0) {
    return (
      <>
        <Navbar totalItem={totalItem} />

        <div className="container mt-3 mb-5">
          <h5 className="mt-2">
            <Link to="/" className="links">
              <i className="fa-solid fa-arrow-left"></i> Continue Shopping
            </Link>
          </h5>

          <div className="row mt-5 gap-5 justify-content-center">
            {/* Items */}
            <div className="col-lg-8 h-100  cart-items">
              <h3 className="mt-2 display-1 fs-3">My Cart</h3>

              <div className="d-flex mb-3 justify-content-between">
                <p className="mt-3 align-self-center">
                  Your cart have <span className="fw-bold"> </span> items.
                </p>

                <div className="mt-2 ">
                  <p>
                    Cart value:{" "}
                    <span className="fs-3"> ${totalAmount.toFixed(2)}</span>
                  </p>

                  <Button
                    variant="danger me-2"
                    type="submit"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Clear cart
                  </Button>
                  <Button variant="primary" type="submit">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>

            {/* Card dets */}
            <FillCardDetails />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar totalItem={totalItem} />

      <div className="container mt-4 mb-5">
        <h5 className="mt-2">
          <Link to="/" className="links">
            <i className="fa-solid fa-arrow-left"></i> Continue Shopping
          </Link>
        </h5>
        <div className="row mt-3 gap-5 justify-content-center">
          {/* Items */}
          <div className="col-lg-8 h-100 cart-items">
            <h3 className="mt-2 display-1 fs-3">My Cart</h3>
            <div className="cart-items-container">
              <Scrollbars>
                <div className="container mb-2">
                  <div className="row mt-1 p-2 justify-content-center gap-2">
                    {item.map((product) => {
                      return <CartCard key={product.id} {...product} />;
                    })}
                  </div>
                </div>
              </Scrollbars>
            </div>

            <div className="d-flex mb-3 justify-content-between">
              <p className="mt-3 align-self-center">
                Your cart have <span className="fw-bold"> {totalItem}</span>{" "}
                items.
              </p>

              <div className="mt-2 ">
                <p>
                  Cart value:{" "}
                  <span className="fs-3">${totalAmount.toFixed(2)}</span>
                </p>

                <Button
                  variant="danger me-2"
                  type="submit"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear cart
                </Button>
                <Button variant="primary" type="submit">
                  Checkout
                </Button>
              </div>
            </div>
          </div>

          <FillCardDetails />
        </div>
      </div>
    </>
  );
}

export default CartComponent;
