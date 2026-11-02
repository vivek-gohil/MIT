var employeeApp = angular.module("employeeApp", []);
employeeApp.controller("EmployeeController", function($scope) {
    $scope.employee = {
        id: 501,
        name: "Amit",
        department: "IT",
        salary: 50000
    };
});
