

'use strict';

describe('Fizzbuzz Service', function() {

  var fizzbuzzService;
  var $log;

  beforeEach(module('fizzbuzzService'))
  beforeEach(module('fizzbuzzService', function($provide) {
    $provide.value(console);
  }));


  beforeEach(inject(function(FizzbuzzService, _$log_) {
    fizzbuzzService = FizzbuzzService;
    $log = _$log_;
  }));


  it('should...', function () {



  })
  

});
