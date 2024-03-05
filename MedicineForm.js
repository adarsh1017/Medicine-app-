// MedicineForm.js
import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContext';

function MedicineForm() {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const { addMedicine } = useContext(MedicineContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine({
      medicineName,
      description,
      price,
      quantity
    });
    // Clear input fields after submission
    setMedicineName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="medicine-form">
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Medicine Name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
}

export default MedicineForm;
