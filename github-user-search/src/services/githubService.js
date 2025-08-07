// src/services/githubService.js

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const fetchAdvancedUserSearch = async ({ username, location, repos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query.trim() },
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN || ''}`,
    },
  });

  return response.data;
};