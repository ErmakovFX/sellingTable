
const console2 = require('electron').remote.getGlobal('console');
console2.log('This will be output to the main process console.');

// const _process = process;
// process.once('loaded', () => {
//
//   console.log('preloader');
//   mainWindow = new BrowserWindow({
//     width: 100,
//     height: 100,
//     title: 'Preloader',
//     frame: true,
//     autoHideMenuBar: true,
//   });
//   mainWindow.loadFile('preloader.html');
// });

mainWindow = new BrowserWindow({
  width: 100,
  height: 100,
  title: 'Tracking selling',
  frame: true,
  autoHideMenuBar: true,
});

mainWindow.loadFile('preloader.html');
