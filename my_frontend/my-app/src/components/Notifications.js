import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  // Function to clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      <button onClick={clearNotifications}>Clear Notifications</button>
    </div>
  );
};

export default Notifications;
