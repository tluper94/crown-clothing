import { createContext, useState } from 'react';

export const CartDropdownContext = createContext({
  displayCart: null,
  setDisplayCart: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const value = { displayCart, setDisplayCart };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
