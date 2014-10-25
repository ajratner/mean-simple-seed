angular.module('exampleApp.views.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl : 'views/view1/view1.html',
    controller : 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  
  // get the examples from our server
  $http.get('/api/examples').success(function(data) {
    $scope.examples = data;
  });
}]);
