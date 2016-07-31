/* globals angular */

var app = angular.module('dribbbleApp', ['ui.router']);


app.filter('html', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});


app.filter('limit', function() {
  return function(val, limit) {
    if (val.length <= limit) {
      return val;
    }

    return val.substring(0, limit - 3).trim() + '...';
  };
});


app.provider('Shot', function ShotProvider() {
  // Client token from Dribbble
  var token = 'aa752eab6cd18d59222a681a7ad5646d03802022cc4b5cfe8ccec5c1aa08e7e8';
  var headers = {'Authorization': 'Bearer ' + token};

  this.$get = ['$http', function($http){
    return {
      'all': function() {
        return $http.get('https://api.dribbble.com/v1/shots',
                         {'headers': headers});
      },
      'get': function(id) {
        return $http.get('https://api.dribbble.com/v1/shots/' + id,
                         {'headers': headers});
      }
    };
  }];
});


app.controller('ShotsController', ['$scope', 'Shot', function($scope, Shot) {
  $scope.shots = [];
  Shot.all().then(function(data){
    $scope.shots = data.data;
  });
}]);


app.controller(
  'ShotController',
  ['$scope', '$stateParams', 'Shot',
   function($scope, $stateParams, Shot) {
     $scope.shot = {};
     $scope.shot_loaded = false;

     Shot.get($stateParams.id).then(function(data){
       $scope.shot_loaded = true;
       $scope.shot = data.data;
     });
   }]);


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "js/templates/shots-list.html",
      controller: 'ShotsController'
    })
    .state('shot', {
      url: "/:id",
      templateUrl: "js/templates/shot.html",
      controller: 'ShotController'
    });
});
