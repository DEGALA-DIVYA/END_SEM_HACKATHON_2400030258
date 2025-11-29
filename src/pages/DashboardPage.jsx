import React from "react";
import { useLocation } from "react-router-dom";
import "./PageStyles.css";

function DashboardPage() {
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const role = params.get("role");

  return (
    <div className="container">
      <h1>{role?.charAt(0).toUpperCase() + role?.slice(1)} Dashboard</h1>

      <div className="feature-grid">
        <div className="feature-card"><h3>📌 Services</h3><p>Access role-based services.</p></div>
        <div className="feature-card"><h3>📍 Track Issues</h3><p>Track your submitted complaints.</p></div>
        <div className="feature-card"><h3>📝 Submit Complaint</h3><p>Report a problem with details.</p></div>
        <div className="feature-card"><h3>📞 Contact Support</h3><p>Get platform assistance.</p></div>
        <div className="feature-card"><h3>📢 Announcements</h3><p>View politician updates.</p></div>
      </div>
    </div>
  );
}

export default DashboardPage;