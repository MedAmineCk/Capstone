import React, { useState } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item, removeFromCart }) {
  // const [isHovered, setIsHovered] = useState(false);
  const [isHovered, ref] = useHover();
  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        // onMouseOver={() => setIsHovered(true)}
        // onMouseOut={() => setIsHovered(false)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
