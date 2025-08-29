import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <p className="text-gray-700">Name: {userData.name}</p>
      <p className="text-gray-700">Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;