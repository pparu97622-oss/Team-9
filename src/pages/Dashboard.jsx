import React from 'react';

const Dashboard = () => {
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const stats = [
    { label: "Session Duration", value: "2 Hours", color: "#4caf50" },
    { label: "Account Status", value: "Active", color: "#2196f3" },
    { label: "Database Connection", value: "Connected", color: "#ff9800" }
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ marginBottom: '20px' }}>Admin Dashboard</h2>
      
      {/* Stats Row */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ flex: 1, padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', borderLeft: `5px solid ${stat.color}` }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{stat.label}</p>
            <h3 style={{ margin: '5px 0 0 0' }}>{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Activity Log */}
      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px' }}>
        <h3>Recent Login Activity</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #444' }}>
              <th style={{ padding: '10px' }}>User</th>
              <th style={{ padding: '10px' }}>Action</th>
              <th style={{ padding: '10px' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>{getCookie("name") || "User"}</td>
              <td style={{ padding: '10px' }}>Logged In (Google)</td>
              <td style={{ padding: '10px' }}>Just Now</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;