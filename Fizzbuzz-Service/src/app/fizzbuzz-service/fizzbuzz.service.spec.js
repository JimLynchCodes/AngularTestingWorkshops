

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


  it('should create the fizzbuzz service', function(){
      expect(fizzbuzzService).toBeDefined();
  });


  it('should return 1 from fizzbuzz(1)', function() {
    expect(fizzbuzzService.fizzbuzz(1)).toEqual('1');
  });


  it('should return a string', function () {
    expect(typeof fizzbuzzService.fizzbuzz(1)).toEqual('string')
  });

  it('should return Please enter a positive integer! when calling fizzbuzz with a string.', function () {
    expect(fizzbuzzService.fizzbuzz('lala')).toEqual('Sorry, please enter a positive number!');
  });

  it('should return Please enter a positive integer! when calling fizzbuzz with a decimal number.', function () {
    expect(fizzbuzzService.fizzbuzz(3.5)).toEqual('Sorry, please enter a positive number!');
  });
  

  it('should return fizz from fizzbuzz(3); ', function() {
    expect(fizzbuzzService.fizzbuzz(3)).toEqual('fizz');
  });

  it('should return buzz from fizzbuzz(5); ', function() {
    expect(fizzbuzzService.fizzbuzz(5)).toEqual('buzz');
  });

  it('should return fizzbuzz from fizzbuzz(15); ', function() {
    expect(fizzbuzzService.fizzbuzz(15)).toEqual('fizzbuzz');
  });

  it('should return Sorry, enter a positive number if number is negative', function () {
    expect(fizzbuzzService.fizzbuzz(-1)).toEqual('Sorry, please enter a positive number!');
  });

  it('should return -- when input is 0', function () {
    expect(fizzbuzzService.fizzbuzz(0)).toEqual('--');
  });

  it('should ', function () {
    console.log();
  })





});
