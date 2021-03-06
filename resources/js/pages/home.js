import React from 'react';
import { useAuth } from '../context/auth';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="container p-2 mx-auto flex flex-col">
      <h1>
        Welcome back
        {currentUser.name}
      </h1>
    </div>
  );
}
