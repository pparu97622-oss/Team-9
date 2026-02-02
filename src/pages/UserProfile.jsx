import React from 'react';

const UserProfile = () => {
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#333' }}>
        <img 
          src={getCookie("photo") || "https://via.placeholder.com/100"} 
          alt="User" 
          style={{ width: '100px', borderRadius: '50%', marginBottom: '20px' }} 
        />
        <h3>Account Information</h3>
        <hr />
        <p><strong>Name:</strong> {getCookie("name")}</p>
        <p><strong>UID:</strong> {getCookie("uid")}</p>
        <p style={{ wordBreak: 'break-all' }}><strong>Token:</strong> {getCookie("token")?.substring(0, 50)}...</p>
      </div>
    </div>
  );
};

export default UserProfile;