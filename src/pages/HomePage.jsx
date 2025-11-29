import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

function HomePage() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">CivicConnect</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Connect Citizens and Politicians for Better Governance</h1>
        <p>A simple, transparent, and responsive platform to improve civic engagement.</p>

        <div className="hero-buttons">
          <Link className="btn primary" to="/login?role=citizen">Citizen Login</Link>
          <Link className="btn primary" to="/login?role=politician">Politician Login</Link>
          <Link className="btn primary" to="/login?role=moderator">Moderator Login</Link>
          <Link className="btn primary" to="/login?role=admin">Admin Login</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
