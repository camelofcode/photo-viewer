/*jslint node: true*/
"use strict";

var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'PhotoViewer',
    description: 'Homemade Photo Viewer App',
    script: 'server.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

svc.install();
