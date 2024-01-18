// Dashboard.js
import React from 'react';
import ItemList from './ItemList';
import Notifications from './Notifications';
import AddItem from './AddItem';
import '../components_style/Dashboard.css';

const Dashboard = ({ user }) => {

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}!</h2>

      {/* Add Item Section */}
      <AddItem />

      {/* Item List Section */}
      <div className="dashboard-section">
        <h3>Your Items</h3>
        <ItemList />
      </div>

      {/* Notifications Section */}
      <div className="dashboard-section">
        <h3>Notifications</h3>
        <Notifications user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
