(function () {
     'use strict';

     angular
          .module('testingButtonClick')
          .config(routerConfig);

     /** @ngInject */
     function routerConfig($stateProvider, $urlRouterProvider) {
          $stateProvider
               .state('home', {
                    url: '/',
                    templateUrl: 'app/example/example.html',
                    controller: 'MainController',
                    controllerAs: 'main'
               })
               .state('calc', {
                    url: '/calc',
                    templateUrl: 'app/components/calculator/calculator.html',
                    controller: 'CalculatorController',
                    controllerAs: 'vm'
               });

          $urlRouterProvider.otherwise('/');
     }

})();
