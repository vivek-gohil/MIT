app.service("StudentService", function ($http) {
    var api_url = "http://localhost:3000/students";

    //Delete student
    this.deleteStudent = function (id) {
        return $http.delete(api_url + "/" + id);
    }

    //Post student 
    this.addStudent = function (student) {
        return $http.post(api_url, student);
    }

    //Get all students - JSON
    this.getAllStudents = function () {
        return $http.get(api_url);
    }

});