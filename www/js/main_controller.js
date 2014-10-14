(function(){
  'use strict';
  angular.module('nv-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.display = '0';
    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}
      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };
  }]);
})();
