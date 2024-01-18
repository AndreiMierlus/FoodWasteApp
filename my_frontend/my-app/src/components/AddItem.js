// AddItem.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [category, setCategory] = useState('');
  const [shareable, setShareable] = useState(false);

  const handleAddItem = async () => {
    const newItem = {
      name: itemName,
      quantity: quantity,
      expiration_date: expirationDate,
      category: category,
      available_to_share: shareable,
    };

    try {
      // Send the new item data to the backend API using axios
      const response = await axios.post('http://localhost:9000/items', newItem);

      // Handle the response and update the state or perform any necessary actions
      console.log('Item added successfully:', response.data);

      // Clear the form after successfully adding the item
      setItemName('');
      setQuantity('');
      setExpirationDate('');
      setCategory('');
      setShareable(false);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

  return (
    <div>
      <h3>Add Item</h3>
      <div>
        <label>Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Available to Share:</label>
        <input type="checkbox" checked={shareable} onChange={() => setShareable(!shareable)} />
      </div>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
