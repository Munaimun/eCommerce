import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  SetIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, SetIsCartOpen] = useState(false);
  const value = { isCartOpen, SetIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
