import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard";

function OrderHistoryDetails({ orders, orderData }) {
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="card p-3 mb-4 " style={{ backgroundColor: "#f1f3f5" }}>
      <div className="d-flex justify-content-around ">
        <p className="m-0">Order ID : {orders.orderId}</p>
        <p className="m-0">
          Purchased on : {orders.createdOnDate.toDate().toLocaleString()}
        </p>
        <p className="m-0">Amount paid : ${orders.totalAmount}</p>

        <p className="m-0">
          <Link
            onClick={() => {
              setOpen(!open);
              setIsClicked(!isClicked);
            }}
            aria-controls="item-details"
            aria-expanded={open}
            style={{ color: "inherit" }}
          >
            Order Details{" "}
            {isClicked ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
        </p>
      </div>

      <Collapse in={open}>
        <div id="item-details" className="mt-3">
          <p className="ms-3">Number of Items : {orders.totalItems}</p>{" "}
          {orders.purchasedItems.map((item) => {
            return <OrderCard key={item.id} {...item} item={item} />;
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default OrderHistoryDetails;
