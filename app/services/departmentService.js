'use strict';

angular.module('storeApp')
  .factory('deptService', function($q, MoltinAuth) {

    var deptObj = {

       loading : false,
      
      deptList: function() {

          deptObj.loading = true;

          var deferred = $q.defer();

          $q.when(MoltinAuth).then(function(moltin) {
            console.log(moltin);
            moltin.Category.List(null, function(departments){
              deferred.resolve(departments);
              console.log(JSON.stringify(departments));
               deptObj.loading = false;
            });
          });
          return deferred.promise;
        },
    };
    return deptObj;
    
  });