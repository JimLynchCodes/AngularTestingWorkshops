/**
 * Created by jameslynch on 4/20/16.
 */
;(function () {
     angular.module('asyncUnitTest')
          .filter('reverse', function() {
               return function(input) {
                    var out = "";

                    if (input != undefined) {

                         input = input.toString();

                         if (input.indexOf(',') != -1) {
                              throw new Error("yo")
                         }

                         for (var i = 0; i < input.length; i++) {
                              out = input.charAt(i) + out;


                         }

                    }

                    return out;
               }
          })
})();