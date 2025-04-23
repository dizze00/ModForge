import React, { useEffect, useState } from 'react';
import { getCurseForgeMods } from '../api/curseforge';
import { getModrinthMods } from '../api/modrinth';
import { downloadMod, deleteMod } from '../utils/modActions'; // These would be the functions for downloading and deleting mods

const App = () => {
  const [mods, setMods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMods() {
      setLoading(true);
      try {
        const modrinthMods = await getModrinthMods('minecraft');
        const curseForgeMods = await getCurseForgeMods(5); // Example category 5 (Minecraft mods)
        setMods([...modrinthMods, ...curseForgeMods]);
      } catch (error) {
        console.error('Error fetching mods:', error);
      }
      setLoading(false);
    }

    fetchMods();
  }, []);

  const handleAddMod = async (modUrl, modName) => {
    await downloadMod(modUrl, modName);  // Download the mod from the URL
    alert('Mod added successfully!');
  };

  const handleDeleteMod = (modName) => {
    deleteMod(modName);  // Delete the mod
    alert('Mod deleted successfully!');
  };

  return (
    <div>
      <h1>Mods</h1>
      {loading ? (
        <p>Loading mods...</p>
      ) : (
        <ul>
          {mods.map((mod, index) => (
            <li key={index}>
              <h2>{mod.title || mod.name}</h2>
              <p>{mod.description || mod.summary}</p>
              <button onClick={() => handleAddMod(mod.downloadUrl, mod.title || mod.name)}>
                Add Mod
              </button>
              <button onClick={() => handleDeleteMod(mod.title || mod.name)}>
                Delete Mod
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
