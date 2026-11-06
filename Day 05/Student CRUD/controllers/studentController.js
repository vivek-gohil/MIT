app.controller("StudentController", function ($scope, StudentService) {
    $scope.students = [];
    $scope.student = {};

    //Delete Student
    $scope.deleteStudent = function (id) {
        if (confirm("Are your sure you want to delete")) {
            StudentService.deleteStudent(id)
                .then(function (response) {
                    alert("Student Deleted Successfully")
                    $scope.loadAllStudents();
                })
                .catch(function (error) {
                    console.log("Error while delete student");
                    console.log(error);
                    alert("Unable to delete student")
                })
                .finally(function () {
                    console.log("API call completed");
                })
        }
    }


    // Call service and post data 
    $scope.addNewStudent = function () {
        $scope.student.studentId = Date.now();
        StudentService.addStudent($scope.student)
            .then(function (response) {
                alert("Student Added Sucessfully")
                $scope.student = {};
                $scope.loadAllStudents();
            })
            .catch(function (error) {
                console.log("Error while add student");
                console.log(error);
                alert("Unable to add student")
            })
            .finally(function () {
                console.log("API call completed");
            })
    }

    //Call service and collect data into [] students
    $scope.loadAllStudents = function () {
        StudentService.getAllStudents()
            .then(function (response) {
                $scope.students = response.data;
            })
            .catch(function (error) {
                console.log("Error while loaded studetns");
                console.log(error);
                alert("Unable to load students")
            })
            .finally(function () {
                console.log("API call completed");
            })
    }
    $scope.loadAllStudents();
});