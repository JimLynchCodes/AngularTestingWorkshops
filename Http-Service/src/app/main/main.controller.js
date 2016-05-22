(function() {
  'use strict';

  angular
    .module('httpTdd')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(WeatherService, $log) {
    var vm = this;
    vm.data = 'hello';

    WeatherService.getWeather()
      .then(function (data) {
        $log.log('got data! ' + JSON.stringify(data));
        vm.data = data;
      }, function (data) {
        $log.log('error getting data: ' + data)

      })




  }
})();
