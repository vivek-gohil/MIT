var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {

    // Model
    $scope.student = {
        id: 101,
        name: "Rahul",
        age: 21,
        college: "MIT College"
    };

});