import React from "react";
import SearchBar from "./components/SearchBar";
import UserList from './components/UserList';



function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔍 GitHub User Search</h1>
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;
