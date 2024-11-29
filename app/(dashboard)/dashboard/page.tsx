// app/home/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
  // State to store user details
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Fetch user data from the backend API
        const response = await fetch("/api/dashboard/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // To send cookies with the request
        });

        // Handle non-successful response
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();

        // Set user data to state
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the function to fetch data
    fetchUserDetails();
  }, []);

  // Render the component based on the state
  return (
    <div className="home-page">
      <h1 className="welcome-title">Welcome to the Dashboard</h1>
      <p className="intro-text">
        Choose a role to explore the respective dashboard:
      </p>

      {/* Buttons for Admin, User, and Employee */}
      <div className="button-container">
        <Link href="/dashboard/admin">
          <button className="role-button">Admin</button>
        </Link>
        <Link href="/dashboard/user">
          <button className="role-button">User</button>
        </Link>
        <Link href="/dashboard/employee">
          <button className="role-button">Employee</button>
        </Link>
      </div>

      {/* Display Loading, Error, or User Details */}
      {loading ? (
        <div className="loading-message">Loading user details...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : user ? (
        <div className="user-details">
          <h2 className="details-heading">User Details</h2>
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
            <strong>Account Created At:</strong>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <div className="no-user-message">User details not found.</div>
      )}

      {/* General Information or Details */}
      <div className="details-container">
        <h2 className="details-heading">Explore Your Dashboard</h2>
        <p className="details-text">
          Whether you are an Admin, User, or Employee, each role has a specific
          dashboard that provides insights and functionalities to manage and
          monitor data effectively. Click on one of the buttons above to get
          started.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
