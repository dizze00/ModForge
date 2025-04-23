// src/api/modrinth.js
import axios from 'axios';

// Function to search for mods on Modrinth
export const getModrinthMods = async (query) => {
  try {
    const response = await axios.get('https://api.modrinth.com/v2/search', {
      params: {
        query: query,  // Use the search term, e.g., 'minecraft'
        limit: 10,      // Limit the number of results
      }
    });

    return response.data.hits;  // Returning the list of mods
  } catch (error) {
    console.error('Error fetching Modrinth mods:', error);
    return [];
  }
};
