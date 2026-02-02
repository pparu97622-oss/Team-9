import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Expanded list of names to make the directory feel bigger
  const customNames = [
    "Ghyalpo", "Paru", "Tenzin", "Dolma", "Sonam", "Pasang", 
    "Lhakpa", "Pema", "Nawang", "Yangchen", "Dawa", "Karma",
    "Dorjee", "Tseten", "Mingma", "Kunsang"
  ];

  useEffect(() => {
    const savedUsers = localStorage.getItem('team_members');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
      setLoading(false);
    } else {
      axios.get('https://reqres.in/api/users?per_page=12')
        .then(res => {
          const enhancedUsers = res.data.data.map((user, index) => ({
            ...user,
            display_name: customNames[index] || user.first_name,
            role: index % 3 === 0 ? "Lead Developer" : index % 3 === 1 ? "Product Designer" : "Security Analyst",
            status: "Active",
            joined: "Jan 2026"
          }));
          setUsers(enhancedUsers);
          localStorage.setItem('team_members', JSON.stringify(enhancedUsers));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) localStorage.setItem('team_members', JSON.stringify(users));
  }, [users]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleRemove = (id, name) => {
    if(window.confirm(`Permanently remove ${name}?`)) {
      setUsers(users.filter(u => u.id !== id));
      showToast(`${name} removed from system.`);
    }
  };

  const handleAdd = () => {
    const name = prompt("Enter Member Name:");
    if (name) {
      const newUser = {
        id: Date.now(),
        display_name: name,
        email: `${name.toLowerCase().replace(/\s/g, '')}@team9.com`,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}`,
        role: "Team Contributor",
        status: "Active",
        joined: "Just Now"
      };
      setUsers([newUser, ...users]);
      showToast(`${name} added successfully!`);
    }
  };

  // UPDATED: Now filters by both Name AND Email
  const filteredUsers = users.filter(user => 
    user.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loader-container"><div className="spinner"></div></div>;

  return (
    <div className="container page-fade-in">
      {toast && <div className="toast-notification">{toast}</div>}
      
      <div className="directory-header">
        <div className="header-text">
          <h1>Member <span className="text-gradient">Directory</span></h1>
          <p className="text-muted">Manage your organization's talent and access profiles.</p>
        </div>
        <div className="header-controls">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Filter by name or email..." 
              className="modern-search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="add-user-btn" onClick={handleAdd}>+ Add New Member</button>
        </div>
      </div>

      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="user-card-pro">
              <div className="card-top">
                <span className={`status-pill ${user.status.toLowerCase()}`}>{user.status}</span>
                <button className="btn-icon-delete" onClick={() => handleRemove(user.id, user.display_name)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
              
              <img src={user.avatar} alt={user.display_name} className="avatar-pro" />
              <h3 className="user-name">{user.display_name}</h3>
              <p className="user-role">{user.role}</p>
              
              <div className="user-details-mini">
                <div className="detail-item" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: '#646cff' }}>Email:</span> {user.email}
                </div>
                <div className="detail-item" style={{ fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: '600', color: '#646cff' }}>Joined:</span> {user.joined}
                </div>
              </div>

              <Link to={`/user/${user.id}`} className="full-profile-btn">View Full Profile</Link>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;