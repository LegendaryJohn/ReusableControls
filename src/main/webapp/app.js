'use strict';

var app = angular.module('myApp', []);

app.controller('appController', ['$scope', 'filterName', function($scope, filterName){
    
    this.person = {firstName: 'Peter', lastName: 'Smith'};
    
        $scope.titleCase = filterName.titleCase("my example service");
        $scope.camelCase = filterName.camelCase("my example service");
        $scope.dashCase = filterName.dashCase("my example service");
    
    $scope.myFunction = function(){
        alert("Success");
      $scope.userName = $('#inputUser').val();
      $scope.password = $('#inputPassword').val();
    };
    
    
}]);

app.filter('name', function(){
    
   return function (x){
     return x.lastName + ", " + x.firstName;  
   };
    
});

app.directive('login', function(){
    
    return{
        restrict: 'AE',
        templateUrl: 'login-form.html'
    };
    
});

app.service('filterName', function (){
    
    this.titleCase = function (x){
        var out = x.split(" ");
        var res = "";

        for (var i = 0; i < out.length; i++){
            var a = out[i].slice(0, 1);

            var b = out[i].slice(1, out[i].length);

            res += (a.toUpperCase() + b + " ");

        }
        return res;
    };
    
    this.camelCase = function (y){
        var out = y.split(" ");
        var res = "";

        for (var i = 0; i < out.length; i++){
            var a = out[i].slice(0, 1);

            var b = out[i].slice(1, out[i].length);

            res += (a.toUpperCase() + b);

        }
        return res;
    };
    
    this.dashCase = function (z){
        var out = z.split(" ");
        var res = "";

        for (var i = 0; i < out.length; i++){

            if (i !== out.length-1){
                res += (out[i] + "-");
            }
            else{
                res += (out[i]);
            }

        }
        return res;
    };
});

