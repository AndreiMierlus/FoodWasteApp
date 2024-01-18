// InviteFriends.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components_style/InviteFriends.css';

const InviteFriends = ({ userId }) => {
  const [users, setUsers] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    // Fetch users from your backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/users?userId=${userId}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [userId]);

  const handleInvite = () => {
    // Implement logic to send friend invitation
    console.log('Inviting friend:', selectedFriend);
  };

  return (
    <div className="invite-friends-container">
      <h3>Invite Friends</h3>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.username}{' '}
            <button onClick={() => setSelectedFriend(user)}>Invite</button>
          </li>
        ))}
      </ul>
      {selectedFriend && (
        <div className="selected-friend-info">
          <p>Selected Friend: {selectedFriend.username}</p>
          <button onClick={handleInvite}>Send Invitation</button>
        </div>
      )}
    </div>
  );
};

export default InviteFriends;
