'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {
    $scope.introText = 'intro text';
    $scope.problem = {};
    $scope.wordBank = ['"hello"','return','var','other thing'];
    $scope.onDropComplete=function(data,evt){
      console.log("drop success, data:", data, evt);
    }
  }

  ]);

// var problems = [
// {
//   introText: '',
//   tags: [],
//   difficulty: 1,

// },
// ];
