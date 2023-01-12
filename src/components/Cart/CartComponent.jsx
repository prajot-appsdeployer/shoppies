import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartCard from "./CartCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import FillCardDetails from "./FillCardDetails";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../context/Context";
import EmptyCartSVG from "./EmptyCart.svg";

function CartComponent() {
  const GlobalState = useContext(CartContext);
  const cartItems = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const totalAmout = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <>
        <div className="container mt-3 mb-5">
          <h5 className="mt-2">
            <NavLink to="/" className="links">
              <i className="fa-solid fa-arrow-left"></i> Continue Shopping
            </NavLink>
          </h5>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={EmptyCartSVG}
              width="400px"
              alt=""
            />
            <h1 className="display-3 "> Your cart is empty.</h1>

            <NavLink to="/" className="mt-3">
              <Button variant="primary" className="pe-4 ps-4">
                Add Items
              </Button>
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-4 mb-5">
        <h5 className="mt-2">
          <NavLink to="/" className="links">
            <i className="fa-solid fa-arrow-left"></i> Continue Shopping
          </NavLink>
        </h5>
        <div className="row mt-3 gap-5 justify-content-center">
          {/* Items */}
          <div className="col-lg-8 h-100 cart-items">
            <h3 className="mt-2 display-1 fs-3">My Cart</h3>
            <div className=" cart-items-container">
              <Scrollbars>
                <div className="container mb-2">
                  <div className="row mt-1 p-2 justify-content-center gap-2">
                    {cartItems.map((item) => {
                      return (
                        <CartCard
                          key={item.id}
                          {...item}
                          item={item}
                          dispatch={dispatch}
                        />
                      );
                    })}
                  </div>
                </div>
              </Scrollbars>
            </div>

            <div className="d-flex mb-3 justify-content-between">
              <p className="mt-3 align-self-center">
                Your cart have{" "}
                <span className="fw-bold">{cartItems.length}</span> items.
              </p>

              <div className="mt-2 ">
                <p>
                  <span className="fs-3">${totalAmout.toFixed(2)}</span>
                </p>

                <Button
                  variant="danger me-2"
                  type="submit"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_ALL",
                    });
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
