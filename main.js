
const { app, BrowserWindow } = require('electron');
let mainWindow;
let preloader;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    title: 'Tracking selling',
    frame: false,
    autoHideMenuBar: true,
    show: false,
  });
  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    preloader.close();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  preloader = new BrowserWindow({
    width: 100,
    height: 100,
    title: 'Tracking selling',
    frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
  });
  preloader.once('ready-to-show', () => {
    preloader.show();
  });

  setTimeout(() => {
    createWindow();
  }, 2000);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
