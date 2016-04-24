describe('reverse filter', function() {

     var reverseFilter;

     beforeEach(module('asyncUnitTest'))
     beforeEach(inject(function(_$filter_) {
          reverseFilter = _$filter_('reverse');

     }))



     it('should return poop from poop', function () {
          expect(reverseFilter('cool')).toEqual('looc');
     })

     it ('should return cowabunga from agnubawoc', function () {
          expect(reverseFilter('agnubawoc')).toEqual('cowabunga');
     })

     it ('should return cowabunga from agnubawoc', function () {
          expect(reverseFilter('Jasmine')).toEqual('enimsaJ');
     })

     it ('should covert numbers to strings', function () {
          expect(reverseFilter(4)).toEqual('4');
     })

     it ('should throw an error when encountering a comma', function () {
          //expect( function() {reverseFilter("2,7");}).toEqual('7,2');
          expect(function() {reverseFilter("2,7");}).toThrow();
     })


})