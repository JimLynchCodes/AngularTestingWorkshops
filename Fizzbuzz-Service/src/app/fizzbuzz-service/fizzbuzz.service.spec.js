

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

  // afterEach(function(){
  //   angular.forEach($log.log.logs, function(log) {
  //     console.log(log.toString());
  //   })
  // });


  it('should create the fizzbuzz service', function(){

    var str = 'Twas the night before Xmas...';
    var newstr = str.replace(/xmas/i, 'Christmas');
    console.log(newstr);  // Twas the night before Christmas...
      expect(fizzbuzzService).toBeDefined();
  });

  // it('should call fizzbuzz and return something', function() {
  //
  //   var fizzbuzzResult = fizzbuzzService.fizzbuzz();
  //   console.log('fizzbuzzResult: ' + fizzbuzzResult);
  //
  //   expect(fizzbuzzResult).toBeDefined();
  // })


  it('should return 1 from fizzbuzz(1)', function() {
    expect(fizzbuzzService.fizzbuzz(1)).toEqual(1);
  });

  it('should return \'Please pass in an input number to the fizzbuzz method\'', function() {

    expect(fizzbuzzService.fizzbuzz()).toEqual('Please pass in an input number to the fizzbuzz method.');

  });

  it('should return fizz from fizzbuzz(3); ', function() {
    expect(fizzbuzzService.fizzbuzz(3)).toEqual('buzz');
  });



});
