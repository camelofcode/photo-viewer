/*jslint nomen: true*/
/*global angular*/

angular.module('app').factory('apiService', function ($resource) {
    "use strict";

    return {
        folder: $resource('/api/getFolder/:path', {
            path: "@path"
        }),
        image: $resource('/api/getImage/:path', {
            path: "@path"
        })
    };
});
