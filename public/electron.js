const { fork } = require('child_process')
const { app, BrowserWindow } = require('electron')
const path = require('path')

// const server = require('../server/app')

const server = fork(`${path.join(__dirname, 'server', 'app.js')}`)
// const server = fork(`${path.join(__dirname, 'server', 'app.js')}`, [], { cwd: app.getAppPath() })


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    win.loadURL(app.isPackaged ? `file://${path.join(__dirname, '..', 'build', 'index.html')}` : 'http://localhost:3000')
}

app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() })
app.on('activate', function () { if (BrowserWindow.getAllWindows().length === 0) createWindow() })