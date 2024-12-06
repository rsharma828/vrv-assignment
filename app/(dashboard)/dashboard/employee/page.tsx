"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  role: string;
}

const EmployeePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("/api/dashboard/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data: User = await response.json();
        setUser(data);

        if (data.role !== "EMPLOYEE") {
          router.push("/unauthorized");
        }
      } catch (err: any) {
        setError(err.message);
        router.push("/unauthorized");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [router]);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (user && user.role === "EMPLOYEE") {
    return (
      <div className="employee-dashboard">
        <h1>Employee Dashboard</h1>
        <p>Welcome, Employee! Here you can access your tasks and updates.</p>
      </div>
    );
  }

  return (
    <div className="unauthorized-message">
      <h1>Unauthorized Access</h1>
      <p>You are not authorized to view this page.</p>
    </div>
  );
};

export default EmployeePage;
