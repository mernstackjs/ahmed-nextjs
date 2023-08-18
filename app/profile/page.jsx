"use client";
import { useUser } from "@/components/UserContext";
import React from "react";

const UserProfile = () => {
  const { user, loading, error } = useUser();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>User not authenticated</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.firstName}!</h2>
      {/* Render user profile content */}
    </div>
  );
};

export default UserProfile;
