/* globals describe, beforeEach, module, inject, it, expect */

describe('html filter', function() {
  var $filter;
  var $sce;

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function(_$filter_, _$sce_){
    $filter = _$filter_;
    $sce = _$sce_;
  }));

  it('returns trunsted html', function() {
    var html_filter = $filter('html');
    var value = '<b>test</b>';
    expect(html_filter(value).$$unwrapTrustedValue()).toEqual(value);
  });
});


describe('limit filter', function() {
  var $filter;

  beforeEach(module('dribbbleApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('return exact string if its length is lt limit', function() {
    var limit = $filter('limit');
    expect(limit('test', 20)).toEqual('test');
  });

  it('return truncated string if its length is gt limit', function() {
    var limit = $filter('limit');
    expect(limit('testing', 4)).toEqual('t...');
  });
});
