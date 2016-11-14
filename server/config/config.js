/*jslint node: true, nomen: true*/

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    rootPath: rootPath,
    photoPath: "D:\\Photos\\",
    port: process.env.PORT || 3030
};
