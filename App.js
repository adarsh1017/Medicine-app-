// App.js
import React from 'react';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import { MedicineProvider } from './components/MedicineContext';

function App() {
  return (
    <MedicineProvider>
      <div className="app">
        <header>
          <h1>Medicine Bill App</h1>
          <Cart />
        </header>
        <MedicineForm />
        <MedicineList />
      </div>
    </MedicineProvider>
  );
}

export default App;
