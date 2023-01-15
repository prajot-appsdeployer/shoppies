import React from "react";
import Button from "react-bootstrap/Button";

function WishlistCard({
  id,
  image,
  title,
  price,
  rating,
  quantity,
  item,
  dispatch,
  dispatchWishlist,
}) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 p-0 cart-card-img-container">
            <img
              src={image}
              className="img-fluid rounded-start cart-card-img"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">${price}</h5>
              <h6 className="card-subtitle mb-2 text-muted"> {title}</h6>
              <p className="card-text">
                Rating: ⭐ {rating.rate}/5 ({rating.count})
              </p>

              <div className=" mt-4 d-flex justify-items-center gap-3">
                <Button
                  variant="outline-danger "
                  onClick={() =>
                    dispatchWishlist({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    })
                  }
                >
                  Remove from Wishlist
                </Button>

                <Button
                  variant="primary "
                  onClick={() => {
                    dispatch({
                      type: "ADD",
                      payload: item,
                    });

                    alert("Items added to cart");
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistCard;
