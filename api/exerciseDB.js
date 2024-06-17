import axios from 'axios';
import { exerciseKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-key': '021fdf54cemshd6d8bcce2c4906bp125ea7jsne5e7b7629342',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error('API call error:', err);
    return null;
  }
};

export const getBodyPart = async (bodyPart) => {
 
  const data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
  if (data) {
    console.log('Data fetched successfully:',);
  } else {
    console.log('No data returned from API');
  }
  return data;
};
