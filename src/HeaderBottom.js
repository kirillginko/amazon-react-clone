import React, { useState, useEffect } from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function HeaderBottom() {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const URL =
      "https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, []);

  return (
    <div>
      <div className="header__bottom">
        {/* Address */}
        <div className="header__address">
          <div className="header__address-icon">
            <RoomOutlinedIcon />
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">
              {address?.city}({address?.country_code})
            </span>
          </div>
        </div>
        {/* Nav */}
        <div className="header__bottom-nav">
          <span>Products</span>
          <span>Mobile</span>
          <span>Best Sellers</span>
          <span>Today's Deal</span>
          <span>Prime</span>
          <span>Computers</span>
          <span>Pantry</span>
          <span>Electronics</span>
        </div>
        {/* Advt */}
        <div className="header__bottom-app">
          <img
            alt="Amazon App"
            src="https://logos-download.com/wp-content/uploads/2016/09/Amazon_Echo_logo_AmazonEcho-700x156.png"
          />
          <img
            className="header_bottom_logo"
            alt="Amazon App"
            src="https://www.logo.wine/a/logo/Amazon_Prime/Amazon_Prime-Logo.wine.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
