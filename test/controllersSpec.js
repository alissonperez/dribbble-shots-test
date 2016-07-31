/* globals describe, beforeEach, module, inject, it, expect */

describe('Shots Controller', function() {
  var $scope;
  var ctrl;
  var newShot;
  var shots = {data: [1, 2, 3]};

  // Fake shot provider
  newShot = {
    'all': function() {
      return {
        'then': function(callback){
          callback(shots);
        }
      };
    }
  };

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('ShotsController', {$scope: $scope, Shot: newShot});
  }));

  it('Set corect shots list', function() {
    expect($scope.shots).toEqual(shots.data);
  });
});


describe('Shot Controller', function() {
  var $scope;
  var ctrl;
  var newShot;
  var shot = {data: {title: 'Test'}};
  var $stateParams = {id: 99};
  var idUsed;

  // Fake shot provider
  newShot = {
    'get': function(id) {
      idUsed = id;
      return {
        'then': function(callback){
          callback(shot);
        }
      };
    }
  };

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('ShotController',
                       {$scope: $scope,
                        $stateParams: $stateParams,
                        Shot: newShot});
  }));

  it('must use correct id', function(){
    expect(idUsed).toEqual($stateParams.id);
  });

  it('set shot with shot returned from service', function(){
    expect($scope.shot).toEqual(shot.data);
  });
});
