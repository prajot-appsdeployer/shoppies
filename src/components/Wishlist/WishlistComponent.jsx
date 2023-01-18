import { doc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import { clearWishlist } from "../../features/Wishlist";
import { db } from "../../firebase";
import WishlistSVG from "./Wishlist.svg";
import WishlistCard from "./WishlistCard";

function WishlistComponent() {
  const { userState } = useContext(GlobalContext);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const saveWishlist = () => {
    wishlistItems.forEach((item) => {
      const productData = doc(
        db,
        "usersdetails/",
        userState.uid,
        "/wishlistedItems",
        "" + item.id
      );
      setDoc(productData, item).catch((err) => console.error(err.message));
    });
  };

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
                  onClick={() => dispatch(clearWishlist())}
                >
                  Clear wishlist
                </Button>

                {/* <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    dispatch(addAllToCart(wishlistItems));
                    dispatch(clearWishlist());
                  }}
                >
                  Add all to cart
                </Button> */}

                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => saveWishlist()}
                >
                  Save Wishlist
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
