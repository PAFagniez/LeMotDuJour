angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('WordCtrl', function($scope, WordFetcher, $http){
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

.controller('AccountCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.list = [
      { id: 1, title: 'Titre 1'},
      { id: 2, title: 'Titre 2'},
      { id: 3, title: 'Titre 3'},
      { id: 4, title: 'Titre 4'},
      { id: 5, title: 'Titre 5'},
      { id: 6, title: 'Titre 6'}
   ];
   $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
     }).then(function(modal) {
         $scope.loginModal = modal;
     });
});
