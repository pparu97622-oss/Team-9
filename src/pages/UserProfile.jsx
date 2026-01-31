import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('team_members') || '[]');
    const foundUser = savedUsers.find(u => u.id.toString() === id.toString());
    setUser(foundUser);
  }, [id]);

  if (!user) return <div className="container"><h3>User not found in local records.</h3></div>;

  return (
    <div className="container page-fade-in">
      <button className="secondary-btn" onClick={() => navigate(-1)} style={{marginBottom: '20px'}}>
        ← Back to Directory
      </button>
      
      <div className="profile-detail-card">
        <div className="profile-header">
          <img src={user.avatar} alt={user.display_name} className="profile-avatar-large" />
          <div className="profile-title">
            <span className="badge-primary">{user.role}</span>
            <h1>{user.display_name}</h1>
            <p className="text-muted">Member ID: {user.id}</p>
          </div>
        </div>

        <div className="profile-info-grid">
          <div className="info-box-clean">
            <label>Email Address</label>
            <p>{user.email}</p>
          </div>
          <div className="info-box-clean">
            <label>Account Status</label>
            <p style={{color: '#10b981', fontWeight: '700'}}>{user.status}</p>
          </div>
          <div className="info-box-clean">
            <label>Department</label>
            <p>Team 9 Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;