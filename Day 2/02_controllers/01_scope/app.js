var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {
    $scope.studentName = "Rahul";
    $scope.studentAge = 21;
});