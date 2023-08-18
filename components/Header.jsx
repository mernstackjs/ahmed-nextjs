"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="flex justify-between items-center p-3 bg-white">
      <span>BrandName</span>
      <nav className="flex gap-5">
        {user ? (
          <>
            <span>Hello, {user.username}</span>
            {/* Add logout functionality or link here */}
          </>
        ) : (
          <>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
