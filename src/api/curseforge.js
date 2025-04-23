// src/api/curseforge.js
import axios from 'axios';

// Function to fetch mods from CurseForge by category ID
export const getCurseForgeMods = async (categoryId) => {
  try {
    const response = await axios.get('https://api.curseforge.com/v1/mods/search', {
      params: {
        categoryId: categoryId, // Can be a specific category ID, or leave blank
        pageSize: 10,            // Limit results to 10
        sortOrder: 'desc',
      },
      headers: {
        'X-CurseForge-Api-Key': '$2a$10$Z4GQkbIy7.g1Dsy5rJHhxuZe7b6LtDf6.eMXVRYAxOOQ3ZNk1N8Pm', // Replace with your actual API key
      }
    });

    return response.data.data; // Returning the list of mods
  } catch (error) {
    console.error('Error fetching CurseForge mods:', error);
    return [];
  }
};
