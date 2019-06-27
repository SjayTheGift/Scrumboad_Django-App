
    
    var app = angular.module('scrumboard.demo', []);
    app.controller('ScrumboardController', function($scope,$http) {
   
      $scope.add = function(list, title){
        var card = {
            list:list.id,
            title:title
        };
        //success
        $http.post("/scrumboard/cards/",card).then(function(response) {
            list.cards.push(response.data);
        },
        //Error reporting
        function(){
            alert("Could not create card");
        });
        
    };
    

    
    $http.get("/scrumboard/lists/").then(function(response) {
        $scope.data = response.data;
    });
    
    $scope.sortBy='story_points';
    $scope.reverse=true;
    $scope.showFilters=false;

    
});








    
  
  
