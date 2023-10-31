import React, { useState } from 'react';
import axios from 'axios';

const ProductAdd = () => {
  const [newData, setNewData] = useState({
    name: '',
    unitPrice: '',
    unitsInStock:'',

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const addNewData = () => {
    if (!newData.name || !newData.unitPrice || !newData.unitsInStock) {
        console.log('cant be empty');
        return;
    }

    axios
      .post('https://northwind.vercel.app/api/products', newData)
      .then((response) => {
        console.log('New data added')
      })
  };

  return (
    <div>
      <h1>Add New Data</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="unitPrice"
        placeholder="unit Price"
        value={newData.unitPrice}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="unitsInStock"
        placeholder="Stock"
        value={newData.unitsInStock}
        onChange={handleInputChange}
      />
      <button onClick={addNewData}>Add</button>
    </div>
  );
};



export default ProductAdd