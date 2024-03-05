// MedicineList.js
import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContext';

function MedicineList() {
  const { medicines, addToCart } = useContext(MedicineContext);

  return (
    <div className="medicine-list">
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <strong>{medicine.medicineName}</strong> - {medicine.description}, Price: ${medicine.price}, Quantity: {medicine.quantity}
          </li>
        ))}
      </ul>
      <button onClick={addToCart}>Add to Bill</button>
    </div>
  );
}

export default MedicineList;
