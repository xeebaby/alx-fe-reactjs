import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ query, location, minRepos, page = 1, perPage = 10 }) => {
  try {
    let q = query;

    if (location) {
      q += ` location:${location}`;
    }

    if (minRepos) {
      q += ` repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q,
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const getUserRepos = async (username, perPage = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`, {
      params: {
        per_page: perPage,
        sort: 'updated',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};
