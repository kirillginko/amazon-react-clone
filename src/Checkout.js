import React, { useState, useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [filteredBasket, setFilteredBasket] = useState();

  const findQuantity = (id) => {
    const quantity = basket?.filter((item) => item.id === id);
    return quantity.length;
  };

  useEffect(() => {
    let filteredList = [];
    filteredList = basket.filter(
      (item, i) => i === basket.findIndex((x) => x.id === item.id)
    );
    setFilteredBasket(filteredList);
    console.log(filteredList);
  }, [basket]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket?.length === 0 ? (
            <div className="checkout__empty">
              <img
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt=""
              />
              <div className="checkout__emptyInfo">
                <h2>Your Amazon Basket is Empty</h2>
                <a href="./">
                  <p>Shop today's deals</p>
                </a>
              </div>
            </div>
          ) : (
            <div className="checkout__basket">
              {filteredBasket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quantity={findQuantity(item.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
