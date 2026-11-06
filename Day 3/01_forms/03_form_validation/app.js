let app = angular.module("myApp",[]);

app.controller("studentController",function($scope){
    $scope.student = {};
    $scope.registerStudent = function() {
        alert("Student Register Successfully!");
    }
});