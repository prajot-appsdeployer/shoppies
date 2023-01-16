import React from "react";

function OrderCard({ image, price, title, quantity, rating }) {
  return (
    <>
      <div className=" row g-0">
        <div className="col-md-4 p-0 cart-card-img-container">
          <img src={image} className="img-fluid cart-card-img" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">${price}</h5>
            <h6 className="card-subtitle mb-2 text-muted"> {title}</h6>
            <p className="card-text">
              Rating: ⭐ {rating.rate}/5 ({rating.count})
            </p>
            <p className="card-text">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
