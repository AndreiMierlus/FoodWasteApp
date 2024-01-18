// FriendsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components_style/FriendsList.css';

const FriendsList = ({ userId }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch friends from your backend API
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/friendship-relations?userId=${userId}`);
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, [userId]);

  return (
    <div className="friends-list-container">
      <h3>Friends List</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.friendship_relation_id}>
            {friend.friend_username} - Category: {friend.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
