/* globals describe, beforeEach, module, inject, it */

describe('Shot provider', function() {
  var $provider;
  var $httpBackend;

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function(_Shot_, _$httpBackend_){
    $provider = _Shot_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'https://api.dribbble.com/v1/shots')
      .respond([]);
  }));

  it('returns trunsted html', function() {
    $httpBackend.expectGET('https://api.dribbble.com/v1/shots');
    $provider.all();
    $httpBackend.flush();
  });
});
