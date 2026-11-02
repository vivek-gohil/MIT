
var app = angular.module("myApp", []);

app.controller("EmployeeController", function ($scope) {

    // Employee information
    $scope.employees = [
        {
            id: 101,
            name: "Rahul Sharma",
            city: "Mumbai",
            department: "IT",
            salary: 65000.456,
            age: 25
        },

        {
            id: 102,
            name: "Amit Patil",
            city: "Pune",
            department: "HR",
            salary: 45000.789,
            age: 28
        },

        {
            id: 103,
            name: "Priya Shah",
            city: "Mumbai",
            department: "Finance",
            salary: 75000.555,
            age: 26
        },

        {
            id: 104,
            name: "Neha Joshi",
            city: "Nashik",
            department: "IT",
            salary: 55000.999,
            age: 24
        },

        {
            id: 105,
            name: "Rohit Desai",
            city: "Pune",
            department: "Sales",
            salary: 85000.345,
            age: 30
        },

        {
            id: 106,
            name: "Sneha Kulkarni",
            city: "Mumbai",
            department: "HR",
            salary: 60000.125,
            age: 27
        }

    ];

    // Search variable
    $scope.searchText = "";

    // Date variable
    $scope.today = new Date();

    // Number variable
    $scope.price = 12345.6789;

    // Limit variable
    $scope.limit = 3;

});
