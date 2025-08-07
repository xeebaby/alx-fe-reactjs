import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUserSearch = async ({ username, location, minRepos, page = 1, perPage = 10 }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query.trim(),
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN || ''}`,
    },
  });

  return response.data;
};
