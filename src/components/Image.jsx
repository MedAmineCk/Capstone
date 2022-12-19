import React, { useState } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({
  className,
  img,
  toggleFavorite,
  addToCart,
  isInCart,
  removeFromCart,
}) {
  const { id, url, isFavorite } = img;
  // const [isHovered, setIsHovered] = useState(false);
  const [isHovered, ref] = useHover();

  const heartIcon = () => {
    if (isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(id)}
        ></i>
      );
    } else {
      if (isHovered) {
        return (
          <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(id)}
          ></i>
        );
      }
    }
  };

  const cartIcon = () => {
    if (isInCart) {
      return (
        <i
          className="ri-add-circle-fill cart"
          onClick={() => removeFromCart(id)}
        ></i>
      );
    } else {
      if (isHovered) {
        return (
          <i
            className="ri-add-circle-line cart"
            onClick={() => addToCart(img)}
          ></i>
        );
      }
    }
  };

  return (
    <div
      className={`${className} image-container`}
      // onMouseOver={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      {heartIcon()}
      {cartIcon()}
      <img src={url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
