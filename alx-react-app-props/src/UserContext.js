// alx-react-app-props/src/UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};