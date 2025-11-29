import React from "react";
import "./PageStyles.css";

function AboutPage() {
  return (
    <div className="container">
      <h1>About CivicConnect</h1>
      <p>
        CivicConnect is a platform designed to improve communication between citizens
        and their elected representatives. It helps report issues, provide feedback,
        receive updates, and promote responsible governance.
      </p>

      <h2>Purpose</h2>
      <p>
        To create a transparent and efficient communication channel that makes civic
        issue reporting faster and more accountable.
      </p>

      <h2>Mission</h2>
      <p>Increase transparency, trust, and responsiveness between citizens and government.</p>

      <h2>User Roles and Responsibilities</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>👥 Citizen</h3>
          <p>- Report problems in their locality</p>
          <p>- Give feedback to representatives</p>
          <p>- Track issue progress</p>
        </div>

        <div className="feature-card">
          <h3>🏛 Politician</h3>
          <p>- View reports submitted by citizens</p>
          <p>- Update issue status and take action</p>
          <p>- Post announcements and updates</p>
        </div>

        <div className="feature-card">
          <h3>🛡 Moderator</h3>
          <p>- Monitor discussions</p>
          <p>- Remove abusive content</p>
          <p>- Maintain respectful communication</p>
        </div>

        <div className="feature-card">
          <h3>⚙ Admin</h3>
          <p>- Oversee platform operations</p>
          <p>- Manage user accounts and roles</p>
          <p>- Ensure data integrity and security</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;