(function() {
  'use strict';

  describe('WeatherService', function(){
    var vm;
    var weatherService;

    beforeEach(module('httpTdd'));
    beforeEach(inject(function(WeatherService) {

      weatherService = WeatherService;

      spyOn(weatherService, 'getWeather').and.callFake(
        function () {
          return {things: 'poop'}
        }
      )
    }));

    it('should create the weather service', function() {
        expect(weatherService).toBeDefined();
    });

    it('should set vm.data to poop if request return poop', function () {


      expect(weatherService.getWeather()).toEqual({things: 'poop'});




    })


  });
})();
