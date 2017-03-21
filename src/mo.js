var moBufferReader = require('./mo_buffer_reader')


function Mo() {
    
	return {
		readMo : function(fd) {
			/* read magic */
			var magic = moBufferReader.readInt32(fd, 0)
			var version = moBufferReader.readInt32(fd, 4)
			var strCnt = moBufferReader.readInt32(fd, 8)
			var originalStringAdress = moBufferReader.readInt32(fd, 12)
			var translatedStringAddress = moBufferReader.readInt32(fd, 16)
			var hashTableSize = moBufferReader.readInt32(fd, 20)
			var hashTableAddress = moBufferReader.readInt32(fd, 24)
            
            console.log(strCnt, '-')
            console.log(originalStringAdress)
            console.log(translatedStringAddress)
            
            var originals = moBufferReader.readPhrase(fd, originalStringAdress)
            var translated = moBufferReader.readPhrase(fd, translatedStringAddress)

            },
		writeMo : function(lgs) {}
    }
}


     

module.exports = Mo

var mo = new Mo()