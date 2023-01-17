import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { GlobalContext } from "../../context/Context";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function FillCardDetails(props) {
  const { CartState, userState } = useContext(GlobalContext);
  const cartItems = CartState.state;

  // eslint-disable-next-line
  const [cvv, setCVV] = useState("");

  // Random order ID generator
  const orderId = Math.floor(Math.random() * 900000) + 100000;

  const userDetails = {
    userID: userState.uid,
    userEmail: userState.email,
    userName: userState.displayName,
  };

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    nameOnCard: "",
  });

  const cartDetails = {
    totalItems: cartItems.length,
    totalAmount: props.totalAmout,
    purchasedItems: cartItems,
  };

  const timestamp = {
    createdOnDate: serverTimestamp(),
  };

  const purchaseDetails = {
    orderId: orderId,
    ...userDetails,
    ...cardDetails,
    ...cartDetails,
    ...timestamp,
  };

  const checkout = async (e) => {
    const docRef = doc(db, "purchaseHistory", "" + orderId);
    await setDoc(docRef, purchaseDetails)
      .then(alert("Payment Successful."))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      {/* Checkout */}
      <div className="col-lg-3 h-100 checkout-dets mb-4">
        <h1 className="fs-5 ">
          <i className="p-2 pb-0 fa-regular fa-credit-card"></i> Enter Card
          Details
        </h1>

        <Form className="row p-2" onSubmit={checkout}>
          <Form.Group className="col-sm-12 mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Card Number "
              required
              minLength="16"
              maxLength="16"
              onChange={(e) => {
                setCardDetails((prev) => ({
                  ...prev,
                  cardNumber: e.target.value,
                }));
              }}
            />
          </Form.Group>

          <Form.Group className="col-sm-6 mb-3">
            <Form.Label>Expiry date</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              required
              minLength="5"
              maxLength="5"
              onChange={(e) => {
                setCardDetails((prev) => ({
                  ...prev,
                  expiryDate: e.target.value,
                }));
              }}
            />
          </Form.Group>

          <Form.Group className="col-sm-6 mb-3">
            <Form.Label>CVV Code</Form.Label>
            <Form.Control
              type="password"
              placeholder="CVV"
              required
              minLength="3"
              maxLength="3"
              onChange={(e) => {
                setCVV(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="col-sm-12 mb-3">
            <Form.Label>Name on card</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              maxLength="20"
              onChange={(e) => {
                setCardDetails((prev) => ({
                  ...prev,
                  nameOnCard: e.target.value,
                }));
              }}
            />
          </Form.Group>

          <Form.Group className="col-sm-12 mb-3 text-center">
            <Button variant="primary" type="submit">
              Checkout
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default FillCardDetails;
