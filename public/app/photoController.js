/*global angular, $*/

angular.module('app').controller('photoController', function ($scope, $sce, $routeParams, $location, apiService, $filter) {
    "use strict";

    $scope.selectedPhotoSrc = '';
    $scope.index = parseInt($routeParams.index, 10);
    $scope.loaded = false;

    apiService.folder.query({
        path: $routeParams.path
    }, function (photos) {
        $scope.photos = $filter('filter')(photos, function (photo) {
            return photo.isFile;
        });

        $scope.selectedPhotoSrc = $scope.photos[$scope.index].imagePath;

        $scope.loaded = true;
    });

    $scope.swipeLeft = function (event) {
        $scope.index += 1;
        if ($scope.index === $scope.photos.length) {
            $scope.index = 0;
        }
        $scope.selectedPhotoSrc = $scope.photos[$scope.index].imagePath;
    };

    $scope.swipeRight = function () {
        $scope.index -= 1;
        if ($scope.index < 0) {
            $scope.index = $scope.photos.length - 1;
        }
        $scope.selectedPhotoSrc = $scope.photos[$scope.index].imagePath;
    };

});
