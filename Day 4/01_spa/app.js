var app = angular.module("studentApp",["ngRoute"]);

app.config(function($routeProvider){
  //define all navigation rules
  $routeProvider.when("/home",{
    templateUrl:"views/home.html"
  })
  .when("/about",{
    templateUrl:"views/about.html"
  })
  .when("/student",{
    templateUrl:"views/student.html"
  })
  .otherwise({
    redirectTo:"/home"
  })
  

})