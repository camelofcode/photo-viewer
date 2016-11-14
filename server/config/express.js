/*jslint node: true*/

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {
    "use strict";

    app.set('views', path.join(config.rootPath, 'public', 'app'));
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express['static'](path.join(config.rootPath, 'public')));
};
