const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, '../public/icon.png')
  });

  win.loadFile(path.join(__dirname, 'renderer/index.html'));
}

app.whenReady().then(createWindow);
