// Creating module
var app = angular.module("myApp",[]);

// Creating Controller
app.controller("studentController",function($scope){
    $scope.student = {};
    $scope.registerStudent = function() {
        alert("Student registed successfully");
        console.log($scope.student);
    }
});