// app/dashboard/user/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

const UserDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/dashboard/user");
        setUser(response.data);
      } catch (error: any) {
        if (error.response) {
          setError(error.response.data.error || "Something went wrong");
        } else {
          setError("Network error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
      {user && (
        <div className="user-card">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Joined on:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
