const fs = require('fs')
function MoReader() {
    
}


MoReader.prototype.readInt32 = function(fd, offset) {
    var buffer = new Buffer(32)
    fs.readSync(fd, buffer, 0, buffer.length, offset)

    return buffer.readInt32LE()
}

MoReader.prototype.readInt16 = function(fd, offset) {
    var buffer = new Buffer(16)
    fs.readSync(fd, buffer, 0, buffer.length, offset)

    return buffer.readInt16LE()
}

MoReader.prototype.readPhrase = function(fd, offset) {
    var phrases = []
    var buffer = new Buffer(100)
    var size = this.readInt16(fd, offset)
    var offset = this.readInt16(fd, offset+2)
    
    //console.log("-")
    //console.log(size)
    //console.log(offset)
    //console.log(sizeAndOffset + 4)
}



module.exports = new MoReader()
