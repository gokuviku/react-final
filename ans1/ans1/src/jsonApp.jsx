import { useParams } from 'react-router-dom';
import db from '../db.json';

const { name, email, password } = useParams();

const userData = db.users.find((user) => user.name === name && user.email === email && user.password === password);

if (!userData) {
  console.error('User not found');
} else {
  console.log(userData);

  // Update user data
  const updatedUserData = { ...userData, favorites: [1, 3] }; // update favorites
  const updatedDb = { ...db, users: db.users.map((user) => user.id === userData.id ? updatedUserData : user) };
  console.log(updatedDb);

  // Delete user data
  const deletedDb = { ...db, users: db.users.filter((user) => user.id !== userData.id) };
  console.log(deletedDb);
}

import fs from 'fs';

// Update db.json file
fs.writeFileSync('../db.json', JSON.stringify(updatedDb, null, 2));

// Delete db.json file
fs.writeFileSync('../db.json', JSON.stringify(deletedDb, null, 2));