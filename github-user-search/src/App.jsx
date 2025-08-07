// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchAdvancedUsers } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(data.items);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      <div className="mt-8">
        {loading && <p className="text-blue-500 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
