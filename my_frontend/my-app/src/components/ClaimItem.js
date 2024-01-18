// ClaimItem.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components_style/ClaimItem.css'; 

const ClaimItem = ({ userId }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch items from your backend API
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/user/${userId}/items`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [userId]);

  const handleClaimItem = async () => {
    try {
      // Send a request to claim the selected item
      await axios.put(`http://localhost:9000/item/${selectedItem.item_id}`, {
        claimedByUserId: userId,
        // You can include other necessary data here
      });

      // Update the local state or refetch items to reflect the claimed item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.item_id === selectedItem.item_id
            ? { ...item, claimedByUserId: userId }
            : item
        )
      );

      // Reset the selected item
      setSelectedItem(null);

      console.log('Item claimed successfully!');
    } catch (error) {
      console.error('Error claiming item:', error);
    }
  };

  return (
    <div className="claim-item-container">
      <h3>Claim Item</h3>
      <ul>
        {items.map((item) => (
          <li key={item.item_id}>
            {item.name}{' '}
            <button onClick={() => setSelectedItem(item)}>Claim</button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="selected-item-info">
          <p>Selected Item: {selectedItem.name}</p>
          <button onClick={handleClaimItem}>Claim Item</button>
        </div>
      )}
    </div>
  );
};

export default ClaimItem;
