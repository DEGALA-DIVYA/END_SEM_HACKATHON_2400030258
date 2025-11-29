import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageStyles.css";

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!role) return alert("Please select a role.");

    // FIXED: use backticks
    navigate(`/dashboard?role=${role}`);
  };

  return (
    <div className="login-page">
      <h1>Welcome to CivicConnect</h1>
      <p>Please login or create an account</p>

      <form className="login-form" onSubmit={submitHandler}>
        <label>Select Role</label>
        <select onChange={(e) => setRole(e.target.value)} required>
          <option value="">-- Choose Role --</option>
          <option value="citizen">Citizen</option>
          <option value="politician">Politician</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>

        <label>Email</label>
        <input type="email" placeholder="Enter Email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter Password" required />

        <button className="btn primary" type="submit">
          Login
        </button>

        <button
          className="btn secondary"
          type="button"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
