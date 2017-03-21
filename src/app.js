const ipc = require('electron').ipcRenderer
ipc.on('mo_loaded', mo => {

	console.log(mo);

})
