var app = angular.module("studentApp", [])

// Create Service
app.service("StudentService", function () {

    this.students = [
        { name: "Ram", age: 32 },
        { name: "Seeta", age: 31 },
        { name: "Hanuman", age: 28 }
    ];
    //Create a function to return All students 
    this.getAllStudents = function () {
        return this.students;
    }
    //Create a function to add new studnet
    this.addNewStudent = function (student) {
        this.students.push(student);
    }
}
app.controller("studentController", function ($scope, StudentService) {
    $scope.student = {};
    $scope.addNew = function () {
        StudentService.addNewStudent($scope.student);
    }
    $scope.students = StudentService.getAllStudents();
});





