import React from 'react';
import axios from 'axios';

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      // Make a request to the server to logout
      const response = await axios.post('/api/auth/logout');

      // Handle successful logout
      console.log(response.data.message);
      onLogout(); // You can use this callback to update your UI or perform other actions on logout
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className="ml-auto" style={{ marginRight: '1rem' }}>
      <button className="btn btn-dark mx-2 text-white font-semibold hire_creatives" style={{ fontSize: '15px', padding: '11px' }} onClick={handleClick}>
        Logout
      </button>
    </div>

  );
}
export default Logout

