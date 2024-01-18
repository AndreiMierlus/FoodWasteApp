import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your backend API
    // Replace the URL with the actual URL of your backend API endpoint
    axios.get('http://localhost:9000/api/ItemRouter.js')
      .then(response => {
        // Update state with fetched items
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error.message);
      });
  }, []); 

  // Organize items by categories
  const itemsByCategory = items.reduce((acc, item) => {
    const category = item.category || 'Uncategorized';
    acc[category] = acc[category] || [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2>Item List</h2>
      {Object.keys(itemsByCategory).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {itemsByCategory[category].map(item => (
              <li key={item.item_id}>
                {item.name} - {item.quantity} {item.quantity > 1 ? 'items' : 'item'}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
