angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ListCtrl', function($scope, WordFetcher, $http){
  $scope.words = [];
  $scope.word = [];

  WordFetcher.getWords().then(function(data){
    $scope.words = data.data;
    return $scope.words;
  });

  WordFetcher.getWord().then(function(data){
    $scope.word = data.data[0];
    return $scope.word;
  });

})

.controller('WordCtrl', function($scope, WordFetcher, $http){

  $scope.word = [];

  WordFetcher.getWord().then(function(data){
    $scope.word = data.data[0];
    return $scope.word;
  });

});
