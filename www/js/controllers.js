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
    $scope.words = data;
    console.log('LA REPONSE D !', $scope.words);

  });

  var beber = WordFetcher.getWord().then(function(data){
    $scope.word = data.data[0];
    console.log('WORD EST !', data); 
    console.log('RESPONSE : ', $scope.word);
    return $scope.word.$$state;
  });

  $scope.toto = beber;

    console.log('OVER THE LINE : ', $scope.toto);
  
  // $http.get('http://192.168.1.78/android/getWord.php').then(function(response){
    //$scope.word = response
    // console.log('it works !', $scope.word.data[0].name);
  // });

  
  //$scope.wordId = WordFetcher.getUserById();
  $scope.list = [
      { id: 1, name: 'Pétrichor', definition: 'Odeur de la pluie'},
      { id: 1, name: 'Baboulinet', definition: 'aaz'},
      { id: 3, name: 'Ro', definition: 'fth'}
   ];
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
