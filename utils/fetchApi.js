

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':  "54c7c871b6mshd3d882f03067b71p1406fajsn2254a6",
    },
  });
    
  return data;
}