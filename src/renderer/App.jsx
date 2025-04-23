import React from 'react';
const { loginMicrosoft } = require('../auth/microsoft');
const { launchMinecraft } = require('../launcher/launcherClient');

export default function App() {
  const handleLaunch = async () => {
    const auth = await loginMicrosoft();
    if (auth) launchMinecraft(auth);
  };

  return (
    <div>
      <h1>ModForge Launcher</h1>
      <button onClick={handleLaunch}>Launch Minecraft</button>
    </div>
  );
}
