(function() {
  'use strict';

  angular
    .module('httpTdd')
    .service('WeatherService', WeatherService);

  /** @ngInject */
  function WeatherService($http) {
    var vm = this;


    vm.getWeather = function () {

      return $http.get('https://api.github.com/users/mralexgray/repos')
        .then(function (data) {
          return data
        }, function (data) {
          return data
        })

    }



  }
})();
