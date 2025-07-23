// UserDetails.jsx
import { useContext } from 'react';
import { UserContext } from './UserContext';  // Changed to named import

function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;