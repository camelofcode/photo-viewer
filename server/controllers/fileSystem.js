/*jslint node: true, vars: true*/
var fs = require("fs"),
    path = require("path"),
    config = require('../config/config');

module.exports.getFolder = function (req, res) {
    "use strict";

    var paramsPath = decodeURIComponent(req.params.path || ""),
        folder = path.join(config.photoPath, paramsPath),
        children = fs.readdirSync(folder),
        childName,
        childPath,
        results = [],
        i,
        childPic,
        folderImage = null,
        isFile,
        imagePath;

    for (i = 0; i < children.length; i += 1) {
        imagePath = undefined;
        folderImage = undefined;
        childName = children[i];
        childPath = path.join(paramsPath, childName);
        isFile = !fs.statSync(path.join(folder, childName)).isDirectory();

        if (!isFile) {
            var subs = fs.readdirSync(path.join(config.photoPath, childPath));
            var j;
            for (j = 0; j < subs.length; j += 1) {
                childPic = subs[j];
                if (childPic && !fs.statSync(path.join(config.photoPath, childPath, childPic)).isDirectory()) {
                    folderImage = path.join(childPath, childPic);
                    break;
                }
            }

        }

        if (isFile) {
            imagePath = "/api/getImage/" + encodeURIComponent(childPath);
        } else {
            if (folderImage) {
                imagePath = "/api/getImage/" + encodeURIComponent(folderImage);
            }
        }

        results.push({
            isFile: isFile,
            path: encodeURIComponent(childPath),
            imagePath: imagePath,
            name: childName
        });
    }

    res.send(results);
};

module.exports.getImage = function (req, res) {
    "use strict";
    var imagePath = config.photoPath + req.params.path;
    res.sendFile(imagePath);
};
