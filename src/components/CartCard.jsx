import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function CartCard({ image, title, price, rating }) {
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

              <ListGroup className="justify-items-center list-group m-2 mb-3">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                  <Button variant="">
                    <i className="fa-solid fa-minus "></i>
                  </Button>
                  <input
                    type="text"
                    placeholder="1"
                    style={{ width: "50px" }}
                  />
                  <Button variant=" ">
                    <i className="fa-solid fa-plus "></i>
                  </Button>
                </div>
                <Button variant="outline-danger ">Remove</Button>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;