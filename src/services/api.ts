// services/api.ts

const USER_DATA_URL = 'https://dummyjson.com/c/8965-2d91-4ddb-a6b5';

export const fetchUserData = async () => {
  try {
    const response = await fetch(USER_DATA_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
