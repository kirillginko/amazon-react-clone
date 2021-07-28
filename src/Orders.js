import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { useHistory } from "react-router-dom";

function Orders() {
  const [{ basket, user, isLoading }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  let history = useHistory();

  const loadUser = () => {
    dispatch({
      type: "LOAD_USER",
    });
  };

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <>
      {!user ? (
        history.push("/login")
      ) : (
        <div className="orders">
          <h1>Your Orders</h1>

          <div className="orders__order">
            {orders?.map((order) => (
              <Order order={order} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
