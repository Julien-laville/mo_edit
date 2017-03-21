const Menu = require('electron').Menu

const menuTemplate = [{
    label : 'File',
    submenu : [{
        role : 'Open',
        click() {openFile()},
        label : 'Open'
    }, {
        role : 'Save',
        click() {saveFile()},
        label : 'Save'
    }]
}]

function openFile() {
    
}

function saveFile() {
    
}

module.exports = function() {
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
}