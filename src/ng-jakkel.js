
(function(angular) {

  'use strict';

  angular.module('jakkel', [])

  .constant('version', '0.0.1')

  .provider('acl', function(version) {
    
  })

  .directive('aclIf', function() {
    return {
      restrict: 'A'
    };
  })

  .directive('aclShow', function() {
    return {
      restrict: 'A'
    };
  })

  .directive('aclHide', function() {
    return {
      restrict: 'A'
    };
  })

  .directive('aclActions', function() {
    return {
      restrict: 'A'
    };
  });

})(angular);
