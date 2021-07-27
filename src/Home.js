import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_V2_3000x1200._CB668890782_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1232134135"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="4953809434"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1232165434"
            title="Apple Watch Series 4 (GPS + Cellular, 44MM) - Space Gray Aluminum Case with Black Sport Band"
            price={239.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61HlzgZf4iL._AC_SL1500_.jpg"
          />
          <Product
            id="2344593076"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9082933265"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611cv17d.jpg"
          />
          <Product
            id="3654787654"
            title="
            Himalayan Salt Lamp 6-8” (4-7 lb) with Dimmer Switch - All Natural and Handcrafted with Wooden Base and an Extra Bulb"
            price={24.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81u+FrJWB2L._AC_SL1500_.jpg"
          />
          <Product
            id="3264534564"
            title="Mongoose Tyax Comp, Sport, and Expert Adult Mountain Bike, 27.5-29-Inch Wheels, Tectonic T2 Aluminum Frame, Rigid Hardtail, Hydraulic Disc Brakes, Multiple Colors"
            price={909.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81zDEsZQtoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="9069974856"
            title="Giga byte GeForce RTX 3070 OC Edition Graphics Card 8GB 256-bit GDDR6 PCIe 4.0 Protection Metal Back Plate 3X WINDFORCE Fans 2x HDMI 2.1 2 x DisplayPort 1.4a w/ Mytrix HDMI 2.1 Cable(4k@120Hz/8K@60Hz)"
            price={1199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/710yEXFoEtL._AC_SL1000_.jpg"
          />
          <Product
            id="3465267485"
            title="
            SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model"
            price={567.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
          />
          <Product
            id="1243564587"
            title="
            TRIDENT Soft and Plush, 100% Cotton, Highly Absorbent, Bathroom Towels, Super Soft, 6 Piece Towel Set (2 Bath Towels, 2 Hand Towels, 2 Washcloths), 500 GSM, Charcoal"
            price={29.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/A1r-Mh72ksL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2483753475"
            title="Genius Creatine Powder, Post Workout Supplement For Men and Women with Creapure Monohydrate, Hydrochloride Hcl MagnaPower and Carnosyn Beta-Alanine SR, Natural Lean Muscle Builder – Sour Apple, 188G"
            price={24.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71sLa5xoylS._AC_SL1500_.jpg"
          />
          <Product
            id="1423837643"
            title="HU KITCHEN Chocolate Covered Almonds, 4 OZ"
            price={11.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/816-yRA--LL._SL1500_.jpg"
          />
          <Product
            id="3495867472"
            title="
            Bowflex SelectTech Dumbbell"
            price={399.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/816lKIQ3C8L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6347584736"
            title="
            Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or Late "
            price={128.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg"
          />
          <Product
            id="23748342349"
            title="
            Zojirushi NP-NWC10XB Pressure Induction Heating Rice Cooker & Warmer, 5.5 Cup, Stainless Black, Made in Japan"
            price={485.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81G-vwfGylL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
