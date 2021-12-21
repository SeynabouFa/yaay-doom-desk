const { app, BrowserWindow } = require('electron')
// Create mainWindow
let mainWindow

console.log(app.webFrame)

function createMainWindow() {
  mainWindow = new BrowserWindow({
    transparent: true,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadURL('https://yaay-doom.vercel.app/')
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
