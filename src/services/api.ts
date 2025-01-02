import { UserData } from "../pages/user/personal-information/model";

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

const USER_PUT_DATA_URL = 'https://dummyjson.com/c/9017-7199-4849-834e';

export const updateUserData = async (userData: UserData) => {
  try {
    const response = await fetch(USER_PUT_DATA_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user data');
    }

    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};

