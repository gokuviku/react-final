// UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import userData from '../db.json'; // Or use a data fetching mechanism

function UserDetail() {
  const { userId } = useParams(); // Access the userId parameter

  const user = userData.users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <p>User not found.</p>;
  }

  const { name, email } = user; // Destructure user data

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* Add logic to display other user details (favorites, etc.) */}
    </div>
  );
}

export default UserDetail;
