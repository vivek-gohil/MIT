var app = angular.module("myApp", []);

app.controller("myController", function ($scope, $timeout) {
    $scope.message = "Waiting for message";

    $timeout(function() {
        $scope.message = "Hay..I am here!"
    },5000);
});