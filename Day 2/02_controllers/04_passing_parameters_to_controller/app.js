var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {
    $scope.displayMessage = function(name) {
        alert("Welcome " + name);
    };
});