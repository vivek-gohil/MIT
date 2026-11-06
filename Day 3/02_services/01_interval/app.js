var app = angular.module("myApp",[]);

//Dependency Injection - for $scope object and $inteval object 
app.controller("myController", function($scope,$interval){
    $scope.clock = new Date().toLocaleTimeString();

    $interval(function() {
        console.log("We are testing interval service of angular")
        $scope.clock = new Date().toLocaleTimeString();
    },1000);
});
