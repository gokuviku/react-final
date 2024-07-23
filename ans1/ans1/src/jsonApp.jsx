import { useParams } from 'react-router-dom';

import db from '../db.json';

const { name, email, password } = useParams();

const userData = db.users.find((user) => user.name === name && user.email === email && user.password === password);

if (!userData) {
  console.error('User not found');
} else {
  console.log(userData);
}