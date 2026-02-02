import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the members list we saved in the Users page
    const savedUsers = JSON.parse(localStorage.getItem('team_members') || '[]');
    // Find the specific user by ID (Note: id from useParams is a string)
    const foundUser = savedUsers.find(u => u.id.toString() === id.toString());
    
    if (foundUser) {
      setUser(foundUser);
    }
  }, [id]);

  if (!user) return <div className="container"><h3>User not found.</h3><Link to="/users">Back to Directory</Link></div>;

  return (
    <div className="container page-fade-in" style={{ maxWidth: '800px', marginTop: '40px' }}>
      <button onClick={() => navigate(-1)} className="back-btn" style={styles.backBtn}>
        ← Back to Members
      </button>

      <div className="profile-header-pro" style={styles.profileCard}>
        <div style={styles.topDecoration}></div>
        <img src={user.avatar} alt={user.display_name} style={styles.largeAvatar} />
        
        <h1 style={{ margin: '10px 0 5px 0' }}>{user.display_name}</h1>
        <p style={{ color: '#646cff', fontWeight: 'bold', margin: '0' }}>{user.role}</p>
        <span className={`status-pill ${user.status.toLowerCase()}`} style={{ marginTop: '10px', display: 'inline-block' }}>
          {user.status}
        </span>

        <div style={styles.infoGrid}>
          <div style={styles.infoItem}>
            <label style={styles.label}>Email Address</label>
            <p style={styles.value}>{user.email}</p>
          </div>
          <div style={styles.infoItem}>
            <label style={styles.label}>Member ID</label>
            <p style={styles.value}>#{user.id}</p>
          </div>
          <div style={styles.infoItem}>
            <label style={styles.label}>Joined Date</label>
            <p style={styles.value}>{user.joined}</p>
          </div>
          <div style={styles.infoItem}>
            <label style={styles.label}>Organization</label>
            <p style={styles.value}>Team 9 Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '40px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  topDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(90deg, #646cff, #535bf2)',
    zIndex: 0
  },
  largeAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '5px solid #1a1a1a',
    position: 'relative',
    zIndex: 1,
    marginTop: '10px',
    background: '#fff'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '40px',
    textAlign: 'left'
  },
  infoItem: {
    padding: '15px',
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '10px'
  },
  label: { fontSize: '12px', color: '#888', textTransform: 'uppercase' },
  value: { margin: '5px 0 0 0', fontWeight: '500' },
  backBtn: {
    background: 'transparent',
    color: '#888',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '16px'
  }
};

export default UserDetail;