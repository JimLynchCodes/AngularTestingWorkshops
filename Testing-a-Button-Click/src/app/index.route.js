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
                    templateUrl: 'app/example/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm'
               })

          $urlRouterProvider.otherwise('/');
     }

})();
