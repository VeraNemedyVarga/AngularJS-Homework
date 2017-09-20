
let app = angular.module('App', []);



app.controller('MainCtrl', [
'$scope',
'records',
'getJson',
function($scope, records, getJson){
  $scope.test = 'Hello world!';
  $scope.records = records;
  this.getJson = getJson;
  let data;
  function successHandler(res){
    data = res
  }
  function failureHandler(res){
    data = res;
  }
  console.log(data);

  $scope.addPerson = function(employee){
    records.addPerson($scope.name, $scope.job, $scope.age, $scope.nick, employee)
    $scope.name = '';
  };

  $scope.removePerson = function(id){
    console.log(id);
    records.people.splice(id, 1);
  }
}]);

app.service('getJson', [
  '$http',
  function($http){
    this.getData = function(successHandler, failureHandler) {
      $http.get('/persons.json').then(function(response){
        successHandler(response);    //data can't be used outside this function
      }, function(response) {
        failureHandler(response);
      })

    }

}])


app.service('records', [
  '$http',
  function($http){
    let main = {
      addPerson : function(name, job, age, nick, employee) {
        console.log("stepped into addPerson method");
        console.log(main.persons);
        main.persons.push({
          name: name,
          job: job,
          age: age,
          nick: nick,
          employee: employee,
        })

    }
  };
  return main;
}])
