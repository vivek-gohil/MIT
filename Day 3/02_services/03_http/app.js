var app = angular.module("myApp", []);

app.controller("myController", function ($scope, $http) {
    $scope.users = [];
    $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            $scope.users = response.data;
            console.log(users);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log("API call completed successfully!");
        })
});