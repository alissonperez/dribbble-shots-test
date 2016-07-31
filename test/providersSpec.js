/* globals describe, beforeEach, module, inject, it */

describe('Shot provider', function() {
  var $provider;
  var $httpBackend;

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function(_Shot_, _$httpBackend_){
    $provider = _Shot_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', /js\/templates\/.*/).respond();
  }));

  it('make a get to shots list on dribbble api', function() {
    $httpBackend.expectGET('https://api.dribbble.com/v1/shots').respond();
    $provider.all();
    $httpBackend.flush();
  });

  it('make a get to a shot on dribbble api', function() {
    $httpBackend.expectGET('https://api.dribbble.com/v1/shots/98').respond();
    $provider.get(98);
    $httpBackend.flush();
  });
});
