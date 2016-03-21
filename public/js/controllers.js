'use strict';

/* Controllers */

var task1Controllers = angular.module('task1Controllers', []);

task1Controllers.controller('CategoryListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/')
        .success(function(data) {
            $scope.categories = data;
    });
}]);

task1Controllers.controller('CategoryDetailCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('/' + $routeParams.categoryId)
            .success(function(data) {
                $scope.category = data;
        });
}]);