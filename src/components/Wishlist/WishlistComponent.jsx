import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import WishlistSVG from "./Wishlist.svg";
import WishlistCard from "./WishlistCard";

function WishlistComponent() {
  const { CartState, clearWishlist, addAllToCart } = useContext(GlobalContext);
  const wishlistItems = CartState.state1;

  if (wishlistItems.length === 0) {
    return (
      <>
        <div className="container mt-3 mb-5">
          <h5 className="mt-2">
            <NavLink to="/" className="links">
              <i className="fa-solid fa-arrow-left"></i> Continue Shopping
            </NavLink>
          </h5>

          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid" src={WishlistSVG} width="400px" alt="" />
            <h1 className="display-3 "> Your wishlist is empty.</h1>

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
          <div className="col-lg-12 h-100 cart-items">
            <h3 className="mt-2 display-1 fs-3">My Wishlist</h3>
            <div className=" cart-items-container">
              <Scrollbars>
                <div className="container mb-2">
                  <div className="row mt-1 p-2 justify-content-center gap-2">
                    {wishlistItems.map((product) => {
                      return (
                        <WishlistCard
                          key={product.id}
                          {...product}
                          product={product}
                        />
                      );
                    })}
                  </div>
                </div>
              </Scrollbars>
            </div>

            <div className="d-flex mb-2 ">
              <p className="mt-3">
                You have <span className="fw-bold">{wishlistItems.length}</span>{" "}
                items in the wishlist.
              </p>

              <div className="align-self-center ms-auto">
                <Button
                  variant="danger me-2"
                  type="submit"
                  onClick={() => clearWishlist()}
                >
                  Clear wishlist
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    addAllToCart(wishlistItems);
                    clearWishlist();
                  }}
                >
                  Add all to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistComponent;
