import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const newArr = allPhotos.map((photoObj) => {
      return photoObj.id === id
        ? { ...photoObj, isFavorite: !photoObj.isFavorite }
        : photoObj;
    });
    setAllPhotos(newArr);
  }

  function addToCart(imgObj) {
    setCartItems((prev) => [...prev, imgObj]);
  }

  function removeFromCart(id) {
    let newCart = cartItems.filter((cartItem) => cartItem.id != id);
    setCartItems(newCart);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
