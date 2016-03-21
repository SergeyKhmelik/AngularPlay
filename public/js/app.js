'use strict'

var task1App = angular.module('task1App', [
'ngRoute',
'task1Controllers'
]);

task1App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'assets/partials/category-list.html',
        controller: 'CategoryListCtrl'
    })

    .when('/:categoryId', {
        templateUrl: 'assets/partials/category-detail.html',
        controller: 'CategoryDetailCtrl'
    })

    .when('/:categoryId/skills', {
        templateUrl: '/assets/partials/skill-list.html',
        controller: 'SkillListCtrl'
    })

    .when('/:categoryId/skills/:skillId', {
        templateUrl: '/assets/partials/skill-detail.html',
        controller: 'SkillDetailCtrl'
    })

    .when('/:categoryId/skills/:skillId/employees', {
        templateUrl: 'assets/partials/employee-list.html',
        controller: 'EmployeeListCtrl'
    })

    .otherwise({
        redirectTo: '/user'
    });
}]);