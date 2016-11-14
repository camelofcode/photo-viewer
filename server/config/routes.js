/*jslint node: true*/
var fileSystem = require('../controllers/fileSystem');

module.exports = function (app) {
    "use strict";

    app.get('/api/getFolder/', fileSystem.getFolder);
    app.get('/api/getFolder/:path', fileSystem.getFolder);
    app.get('/api/getImage/:path', fileSystem.getImage);

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('*', function (req, res) {
        res.render('index', {});
    });
};
