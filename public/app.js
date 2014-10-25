angular.module('exampleApp', [
  'ngRoute',
  'exampleApp.views.view1'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
