app.service("StudentService", function($http){
    var api_url="http://localhost:3000/students";

    //Get all students - JSON
    this.getAllStudents = function(){
        return $http.get(api_url);
    }
    
});