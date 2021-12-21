const { app, BrowserWindow } = require('electron')
// Create mainWindow
let mainWindow

console.log(app.webFrame)

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
