import fs from 'fs';
import axios from 'axios';
import path from 'path';

// Download mod from the URL and save it to the 'minecraft-mods' directory
export const downloadMod = async (modUrl, modName) => {
  try {
    const response = await axios.get(modUrl, { responseType: 'stream' });
    const modPath = path.join(__dirname, 'minecraft-mods', modName + '.jar'); // Ensure this path exists

    response.data.pipe(fs.createWriteStream(modPath));

    response.data.on('end', () => {
      console.log('Mod downloaded successfully!');
    });
  } catch (error) {
    console.error('Error downloading mod:', error);
  }
};

// Delete mod from the 'minecraft-mods' directory
export const deleteMod = (modName) => {
  const modPath = path.join(__dirname, 'minecraft-mods', modName + '.jar');

  fs.unlink(modPath, (err) => {
    if (err) {
      console.error('Failed to delete mod:', err);
    } else {
      console.log('Mod deleted successfully!');
    }
  });
};
