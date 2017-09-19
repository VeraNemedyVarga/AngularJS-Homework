const app = angular.module('angularJS-Homework', []);

app.controller('MainCtrl', [
'$scope',
'records',
function($scope, records){
  $scope.test = 'Hello world!';
  $scope.records = records;
  $scope.addPerson = function(employee){
    records.addPerson($scope.name, $scope.job, $scope.age, $scope.nick, employee)
  };
}]);

app.factory('records', [function(){
    let main = {
        persons :[
            {"name": "kutya", "job": "woofer", "age": "3", "nick": "pupper", "employee": true},
            {"name": "cica", "job": "destroyer", "age": "8", "nick": "kitter", "employee": false}
        ],
        addPerson : function(name, job, age, nick, employee) {
          console.log("stepped into addPerson method");
          console.log(employee);
          main.persons.push({
            name: name,
            job: job,
            age: age,
            nick: nick,
            employee: employee,
          })
        },
        removePerson : function(){}
    };
    return main
}])
