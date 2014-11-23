'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {
    $scope.introText = 'intro text';
    $scope.problem = {fields: []};
    $scope.wordBank = ['"hello"','return','var','other thing'];

    $scope.onDropComplete0=function(data,evt){
      console.log(evt);
      $scope.problem.fields[0] = data;
    }

    $scope.onDropComplete1=function(data,evt){
      $scope.problem.fields[1] = data;
    }
    $scope.onDragSuccessBank=function(data,evt){
      var index = $scope.wordBank.indexOf(data);
      if (index > -1) {
        $scope.wordBank.splice(index, 1);
      }
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
