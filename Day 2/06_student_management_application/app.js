
var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {
    $scope.title = "Student Management System";
    $scope.searchText = "";
    $scope.showStudents = true;
    $scope.students = [
        {
            id: 101,
            name: "Rahul",
            age: 21,
            city: "Mumbai",
            marks: 85
        },

        {
            id: 102,
            name: "Amit",
            age: 22,
            city: "Pune",
            marks: 65
        },

        {
            id: 103,
            name: "Priya",
            age: 20,
            city: "Nashik",
            marks: 92
        },

        {
            id: 104,
            name: "Neha",
            age: 21,
            city: "Mumbai",
            marks: 35
        },

        {
            id: 105,
            name: "Rohit",
            age: 23,
            city: "Pune",
            marks: 75
        }
    ];
});
