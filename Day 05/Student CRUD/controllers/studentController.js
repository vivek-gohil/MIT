app.controller("StudentController",function($scope,StudentService){
    $scope.students = [];

    //Call service and collect data into [] students
    $scope.loadAllStudents = function() {
        StudentService.getAllStudents()
            .then(function(response){
                $scope.students = response.data;
            })
            .catch(function(error){
                console.log("Error while loaded studetns");
                console.log(error);
                alert("Unable to load students")
            })
            .finally(function(){
                console.log("API call completed");
            })
    }
    $scope.loadAllStudents();
});