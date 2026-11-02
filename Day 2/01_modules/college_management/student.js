var studentApp = angular.module("studentApp", []);
studentApp.controller("StudentController", function($scope) {
    $scope.student = {
        id: 101,
        name: "Rahul",
        age: 21,
        course: "Computer Science"
    };
});