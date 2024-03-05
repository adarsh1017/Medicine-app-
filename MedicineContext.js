// MedicineContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem('medicines'));
    if (storedMedicines) {
      setMedicines(storedMedicines);
    }

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Save data to local storage whenever medicines or cart items change
  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = () => {
    setCartItems([...cartItems, ...medicines]);
    setMedicines([]); // Clear medicines list after adding to cart
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, cartItems, addToCart }}>
      {children}
    </MedicineContext.Provider>
  );
};
