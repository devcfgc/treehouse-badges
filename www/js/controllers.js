angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'Retrieving Badge Information...'
  });
  //Get profile information
  $http.get('https://teamtreehouse.com/devcfgc.json').
  success(function(data, status, headers, config) {
    $ionicLoading.hide();
    // this callback will be called asynchronously
    // when the response is available
    $scope.badges = data.badges;
  }).
  error(function(data, status, headers, config) {
    $ionicLoading.hide();
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $ionicLoading.show({
      template: 'An error has retriving the profile!'
    });
    setTimeout(function(){
      $ionicLoading.hide();
    }, 4000)
  });
  
});