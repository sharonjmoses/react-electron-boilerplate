const { win, BrowserWindow, app } = require('electron');


function createWindow(){

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "yellow",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('index.html')
}


app.whenReady().then(createWindow)