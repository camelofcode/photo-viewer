/*global angular*/

angular.module('app').controller('mainController', function ($scope, $sce, $routeParams, $location, apiService) {
    "use strict";

    $scope.loaded = false;

    apiService.folder.query({
        path: $routeParams.path || ''
    }, function (folderContents) {
        $scope.folderContents = folderContents;
        $scope.loaded = true;
    });

    $scope.viewPhoto = function (index) {
        $location.url($routeParams.path + "/" + index);
    };
});
