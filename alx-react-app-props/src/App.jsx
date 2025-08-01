// App.jsx
import ProfilePage from './components/ProfilePage';
import { UserContext } from './components/UserContext';  // Changed to named import

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;