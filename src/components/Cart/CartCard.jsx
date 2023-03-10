import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../features/CartSlice";

function CartCard({ id, image, title, price, rating, quantity, product }) {
  const dispatch = useDispatch();

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
              <h5 className="card-title">${price * quantity}</h5>
              <h6 className="card-subtitle mb-2 text-muted"> {title}</h6>
              <p className="card-text">
                Rating: ⭐ {rating.rate}/5 ({rating.count})
              </p>

              <ListGroup className="justify-items-center list-group m-2 mb-3">
                <div className="d-flex justify-content-center align-items-center me-2 mb-3">
                  <Button
                    variant=""
                    onClick={() => {
                      if (quantity > 1) {
                        dispatch(decreaseQuantity(product));
                      } else {
                        dispatch(removeItem(product));
                      }
                    }}
                  >
                    <i className="fa-solid fa-minus "></i>
                  </Button>

                  <p
                    style={{
                      width: "50px",
                      textAlign: "center",
                      border: "1px solid black",
                      marginTop: "10px",
                    }}
                  >
                    {quantity}
                  </p>

                  <Button
                    variant=""
                    onClick={() => {
                      dispatch(increaseQuantity(product));
                    }}
                  >
                    <i className="fa-solid fa-plus "></i>
                  </Button>
                </div>

                <Button
                  variant="outline-danger "
                  onClick={() => dispatch(removeItem(product))}
                >
                  Remove
                </Button>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
