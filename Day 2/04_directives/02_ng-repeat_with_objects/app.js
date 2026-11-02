var app = angular.module("myApp", []);

app.controller("StudentController", function ($scope) {

    $scope.students = [

        {
            id: 101,
            name: "Rahul",
            age: 21,
            city: "Mumbai"
        },

        {
            id: 102,
            name: "Amit",
            age: 22,
            city: "Pune"
        },

        {
            id: 103,
            name: "Priya",
            age: 20,
            city: "Mysuru"
        }

    ];

});