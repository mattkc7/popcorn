'use strict';

angular.module('popcornApp.controllers')
.controller('MovieController', 
  function($scope, MoviesService, $routeParams, $sce) {
    console.log('MovieController (singular) booted up');
    console.log($routeParams);
    $scope.movies = MoviesService.movies();
    $scope.movie = _.find($scope.movies, function(v) { return v.youtubeId == $routeParams.movie_id; });
    $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0"); 
});