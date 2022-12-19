import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart } =
    useContext(Context);
  const images = allPhotos.map((photoObj, index) => {
    let isIncart = cartItems.some((imgObj) => imgObj.id === photoObj.id);
    return (
      <Image
        key={index}
        img={photoObj}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isIncart}
        className={getClass(photoObj.id)}
      />
    );
  });
  return <main className="photos">{images}</main>;
}

export default Photos;
