const app = require('electron').app
const BrowserWindow = require('electron').BrowserWindow
const path = require('path')
const url = require('url')
const fs = require('fs')
const mainMenu = require('./src/main_menu')
const ipc = require('electron').ipcMain



let win
fs.open('./fr.mo', 'r', function(err,fd) {
    if(err) {
        console.error(err)
    }
    var mo = require('./src/mo')()
    mo.readMo(fd)
})

function createWindow() {
	win = new BrowserWindow()
    
    mainMenu()
    
	let indexUrl = url.format({
		pathname : path.join(__dirname, 'index.html'),
		protocol : 'file:',
		slashes : true
	})
	win.loadURL(indexUrl)
	win.webContents.openDevTools()
	ipc.send('mo_loaded', {name : 'test'})
}




app.on('ready', createWindow)
