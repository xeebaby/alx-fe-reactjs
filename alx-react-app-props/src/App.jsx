import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <Header />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      
      <WelcomeMessage />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {/* Main content section */}
        <MainContent />
      </div>

      <div>
        {/* User Profile*/}
           <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>

      <div>
        {/* footer section */}
        <Footer />
      </div>
      
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    
    </>
  )
}


export default App;
