angular.module('starter.services', [])

.factory('WordFetcher', function($http, $q){

    var mdj,
    words = [],
    host = "https://burmese-disease.000webhostapp.com/";

    return {

    getWords: function(){
      return $http.get(host + 'getWords.php');
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
      return $http.get(host +'getWord.php');
    }
  };
});
