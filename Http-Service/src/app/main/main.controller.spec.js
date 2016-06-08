(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var mainController;

    beforeEach(module('httpTdd'));
    beforeEach(inject(function(_$controller_, WeatherService, $q) {

      spyOn(WeatherService, 'getWeather').and.callFake(function() {
        var defer = $q.defer();
          defer.resolve('hello');
        return defer.promise;
      })
      mainController = _$controller_('MainController', {WeatherService: WeatherService});
    }));

    it('should be defined', function () {
      expect(mainController).toBeDefined();
    });

    it('should set vm.data to {some: \'poop\'} when called', function() {

        expect(mainController.data).toEqual('hello');


    });


  });
})();
