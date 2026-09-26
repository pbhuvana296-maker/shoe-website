import React, { useState } from "react";
import "./App.css";

import back from "./assets/images/back.png";
import fornt from "./assets/images/fornt.png";
import left from "./assets/images/left.png";
import hero from "./assets/images/hero.png";

const PRODUCT_DATA = {
  title: "Sport Shoe",

  description:
    "Premium full-grain leather upper with memory foam insole for all-day comfort and style.",

  sizes: [6, 7, 8, 9, 10],

  price: "₹2,999",

  images: [
    fornt,
    left,
    back,
    hero,
  ],
};

export default function App() {
  const [activeImageIndex, setActiveImageIndex] =
    useState(0);

  const [selectedSize, setSelectedSize] =
    useState(null);

  const currentMainImage =
    PRODUCT_DATA.images[activeImageIndex];

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size before continuing.");
      return;
    }

    alert(
      `Item Added!\nSize: ${selectedSize}\nPrice: ${PRODUCT_DATA.price}`
    );
  };

  return (
    <div className="body-wrapper">

      <div className="product-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="product-details">

          <h1 className="product-title">
            {PRODUCT_DATA.title}
          </h1>

          <p className="product-description">
            {PRODUCT_DATA.description}
          </p>

          <div className="product-price">
            {PRODUCT_DATA.price}
          </div>


          {/* SIZE SELECTION */}

          <div className="section-container">

            <div className="section-title">
              Size — Select
            </div>

            <div className="options-flex">

              {PRODUCT_DATA.sizes.map((size) => {

                const isActive =
                  selectedSize === size;

                return (
                  <button
                    key={size}
                    className={`size-btn ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>
                );

              })}

            </div>

          </div>


          {/* ADD TO BAG */}

          <button
            className="add-btn"
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="product-gallery">

          {/* MAIN IMAGE */}

          <div className="main-image-container">

            <img
              src={currentMainImage}
              alt="Sport Shoe"
              className="main-image"
            />

          </div>


          {/* 4 IMAGE THUMBNAILS */}

          <div className="thumbnail-container">

            {PRODUCT_DATA.images.map(
              (imgUrl, index) => {

                const isActive =
                  activeImageIndex === index;

                return (
                  <div
                    key={index}
                    className={`thumbnail-card ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() =>
                      setActiveImageIndex(index)
                    }
                  >

                    <img
                      src={imgUrl}
                      alt={`Sport Shoe View ${
                        index + 1
                      }`}
                      className="thumb-img"
                    />

                  </div>
                );

              }
            )}

          </div>

        </div>

      </div>

    </div>
  );
}