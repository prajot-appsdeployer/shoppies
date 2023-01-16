import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import OrderHistoryDetails from "./OrderHistoryDetails";

function OrderHistory() {
  const [orderData, setOrderData] = useState([]);

  const purchaseHistory = async () => {
    const items = query(
      collection(db, "purchaseHistory"),
      orderBy("createdOnDate", "desc")
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
  }, []);

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
