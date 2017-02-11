angular.module('starter.services', [])

.factory('WordFetcher', function($http, $q){

      var mdj;
      var words = [];
      var promise = $http.get('http://192.168.1.78/android/getWords.php').then(function successCallback(response) {
        // Set message and send data to the view
        console.log(response.data);
        words = response.data.words; // <- Here I have an array of Objects (each object is a customer)
        return words;
    }, function errorCallback(err) {
        // Set error message
        console.log('Erreur', err);
        return err;
    });

    return {

    getWords: function(){
      console.log('WORDS Service', words);
      return $q.when(promise).then(function(){
        return words;
      });
      // .then(function(response){
      //   words = response.data;
      //   console.log(words);
      //   return words;

      // });
    },
    getUserById: function(id){
      for(i=0;i<words.length;i++){
        if(words[i].id == id){
          return words[i];
        }
      }
      return null;
    },
    getWord: function(){
      return $http.get('http://192.168.1.78/android/getWord.php');
      // .then(function(response){
      //   mdj = response.data[0];
      //   console.log('qsd',  mdj.motDuJour);
      //   return mdj;
      // });
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
