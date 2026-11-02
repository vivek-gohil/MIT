var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {

    $scope.students = [
        "Rahul",
        "Amit",
        "Priya",
        "Neha"
    ];

});