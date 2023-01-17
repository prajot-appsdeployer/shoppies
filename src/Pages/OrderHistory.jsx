import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";
import OrderHistoryDetails from "../components/User/OrderHistoryDetails";
import { GlobalContext } from "../context/Context";

function OrderHistory() {
  const { userState } = useContext(GlobalContext);
  const [orderData, setOrderData] = useState([]);

  const purchaseHistory = async () => {
    const currUserId = userState.uid;
    const items = query(
      collection(db, "purchaseHistory"),
      orderBy("createdOnDate", "desc"),
      where("userID", "==", currUserId)
    );

    const querySnapshot = await getDocs(items);
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setOrderData(list);
  };

  useEffect(() => {
    purchaseHistory();
  });

  return (
    <div className="mt-5 mb-5 container">
      <h1 className="display-5 text-center">Your Order History</h1>

      <div className="mt-4 p-3 card shadow">
        <h4 className="mb-4">Your previous orders </h4>

        {orderData.map((orders) => {
          return (
            <OrderHistoryDetails
              key={orders.orderId}
              {...orders}
              orders={orders}
              orderData={orderData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderHistory;
