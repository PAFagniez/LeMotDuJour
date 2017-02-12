angular.module('starter.services', [])

.factory('WordFetcher', function($http, $q){

    var mdj;
    var words = [];

    return {

    getWords: function(){
      return $http.get('http://192.168.1.78/android/getWords.php');
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
    }
  };
});
